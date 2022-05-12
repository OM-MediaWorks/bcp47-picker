import { html, render } from 'uhtml'
import { Settings, SchemaStrings } from './types'

/** @ts-ignore */
import { FlexSearch } from 'flexsearch/dist/flexsearch.es5.js'

/** @ts-ignore */
import { encode } from 'flexsearch/dist/module/lang/latin/simple'

import { onlyUnique } from './helpers/onlyUnique'
import { icon } from './helpers/icon'
import { debounce } from './helpers/debounce'
import { getValueOfOptions } from './helpers/getValueOfOptions'

import { parse, stringify, Schema } from 'bcp-47'
import { iso15924 } from 'iso-15924'
import { iso31661 } from 'iso-3166'
import { iso6393 } from 'iso-639-3'
import { unM49 } from 'un-m49'

import './css/style.css'

const regionCodesMerged = [
  ...iso31661.map(region => [region.alpha2, `${region.name} (ISO 31661)`]), 
  ...unM49.map(region => [region.code, `${region.name} (unM49)`])
] as [[string, string]]
const languageOptions = iso6393.map(language => [language.iso6391 ?? language.iso6393, language.name]) as [[string, string]]
const scriptOptions = iso15924.map(script => [script.code, script.name]) as [[string, string]]

export const init = async (settings: Settings) => {
  const sources = await settings.sources

  class Bcp47Picker extends HTMLElement {

    public searchResults: Array<any> = []
    public searchIndex: typeof FlexSearch.Index
    public value: string = ''
    public showIndividualComponents: boolean = false
    public showAdvanced: boolean = false
    public isEditing: boolean = false
    public maxItems: number = 20
    private observer: any = false
    private defaultMaxItems: number = 20
    public bcp47Index: Map<string, Array<[source: string, index: number]>> = new Map()

    /**
     * We render first and then we index the data.
     */
    async connectedCallback () {
      this.classList.add(settings.theme.loading!)
      this.render()

      this.searchIndex = new FlexSearch.Index({
        profile: 'match',
        tokenize: 'full',
        worker: true,
        /** @ts-ignore */
        encode: encode
      })
      if (settings.theme.base) this.classList.add(settings.theme.base)
      setTimeout(async () => {
        this.index()
        await this.render()
        this.classList.remove(settings.theme.loading!)
      }, 50)
    }
  
    async render () {
      return render(this, this.template())
    }

    /**
     * Creates the search index.
     */
    async index () {
      for (let [sourceName, sourceItems] of Object.entries(sources)) {
        for (const [bcp47, [name, names]] of sourceItems.entries()) {
          this.searchIndex.add([sourceName, bcp47], name)

          if (names) {
            for (const name of names) {
              this.searchIndex.add([sourceName, bcp47], name)
            }  
          }
        }
      }
    }

    /**
     * Searches through the text index and returns an initiated object.
     */
    async search (searchTerm: string) {
      const bcp47Strings = await this.searchIndex.search(searchTerm)

      return bcp47Strings.map(([sourceName, index]: [string, number]) => {
        return [index, sources[sourceName].get(index.toString())]
      })
      .filter(onlyUnique('0'))
      .sort((a: string, b: string) => {
        return a.length - b.length
      })
    }

    /**
     * The template of the whole widget.
     */
    template () {
      const value: Schema = this.value ? parse(this.value) : {
        language: null,
        extendedLanguageSubtags: [],
        script: null,
        region: null,
        variants: [],
        extensions: [],
        privateuse: [],
        irregular: null,
        regular: null
      }

      return html`
        <div class=${`bcp47-value ${settings.theme.valueContainer}`}>
          ${this.value ? this.valueDisplay(value) : this.emptyDisplay()}
          ${this.buttons(value)}
        </div>

        ${this.individualComponentsForm(value)}

        ${this.resultsWrapper()}
      `
    }

    /**
     * Default starting input
     */
    emptyDisplay () {
      return html`
        <input 
          placeholder="Search for a language, region or dialect" 
          class=${`bcp47-search ${settings.theme.valueInput}`} 
          type='search' 
          onkeyup=${async (event: InputEvent) => {
          const searchTerm = (event.target as HTMLInputElement).value
          this.searchResults = await this.search(searchTerm)            
          this.maxItems = this.defaultMaxItems
          await this.render()
          const resultsWrapper = document.querySelector('.bcp47-results')
          if (resultsWrapper) 
            resultsWrapper.scrollTop = 0
        }} />

        ${this.searchResults.length ? html`
        <span class=${`search-results-count ${settings.theme.resultCount}`}>
          ${this.searchResults.length}
        </span>
        ` : null}
      `
    }

    /**
     * Shows the current value
     */
    valueDisplay (value: Schema) {
      let label = null
      if (this.value) {
        /**
         * Do we have a label given by one of the sources?
         */
        for (const source of Object.keys(sources)) {
          if (!label) 
            label = sources[source].get(this.value)?.[0]
        }

        /**
         * If not, generate it from the information we do have.
         */
        if (!label) {
          label = this.getLabel(value)
        }
      }

      return html`
        <div onclick=${async () => {
          if (!this.value) {
            this.showIndividualComponents = false
            this.isEditing = true
            await this.render()
            ;(document.querySelector('.bcp47-search') as HTMLInputElement).focus()  
          }
        }} class=${`bcp47-value-wrapper ${settings.theme.valueInput}`}>

          <span class="bcp47-value-label">
            ${label}
          </span>

          <span class=${`bcp47-value-bcp47 ${settings.theme.code}`}>
            ${this.value}
          </span>
          
          <span class="bcp47-remove-value" onclick=${() => {
            this.value = ''
            this.render()
          }}>${icon('x')}</span>

        </div>
      `
    }

    /**
     * The buttons to show the fields.
     */
    buttons (value: Schema) {
      return html`
      ${this.showIndividualComponents ? html`
      <button class=${`${this.showAdvanced ? 'active' : ''} ${this.showAdvanced ? settings.theme.collapseButton : settings.theme.expandButton}`} onclick=${async () => {
        this.showAdvanced = !this.showAdvanced
        await this.render()
      }}>${icon(this.showAdvanced ? 'chevronContract' : 'chevronExpand')}</button>
      ` : null}

      <button class=${`button ${this.showIndividualComponents ? 'active' : ''} ${settings.theme.showPartsButton}`} onclick=${() => {
        this.showIndividualComponents = !this.showIndividualComponents
        if (this.showIndividualComponents && (value.privateuse.length || value.extensions.length)) {
          this.showAdvanced = true
        }
        this.render()
      }}>${icon('gearFill')}</button>
      `
    }

    /**
     * The form with the seperate BCP47 components.
     */
    individualComponentsForm (value: Schema) {
      return this.showIndividualComponents && !this.searchResults.length ? html`
      <div class=${`bcp47-advanced ${settings.theme.advanced}`}>
        <h6 class=${`bcp47-advanced-title ${settings.theme.advancedTitle}`}>Manual configuration</h6>

        <div class=${`bcp47-language bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.autoComplete('Language', languageOptions, value, 'language')}
        </div>

        ${this.showAdvanced ? html`
        <div class=${`bcp47-region bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          <input disabled=${!value.language ? true : null} placeholder="." class=${settings.theme.valueInput} type="text" .value=${value.extendedLanguageSubtags[0] ?? ''} maxlength="3" />
          <label>Extended language subtags</label>
        </div>
        ` : null}

        <div class=${`bcp47-script bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.autoComplete('Script', scriptOptions, value, 'script', !value.language)}
        </div>

        <div class=${`bcp47-region bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.autoComplete('Region', regionCodesMerged, value, 'region', !value.language)}
        </div>

        ${this.showAdvanced ? html`
        <div class=${`bcp47-region bcp47-current-value-part-normal ${settings.theme.valueContainerAdvanced}`}>
            <input disabled=${!value.language ? true : null} placeholder="." type="text" class=${settings.theme.valueInput} .value=${value.extensions[0] ?? ''} />
            <label>Extension subtags</label>
        </div>

        <div class=${`bcp47-region bcp47-current-value-part-normal ${settings.theme.valueContainerAdvanced}`}>
          <input disabled=${!value.language ? true : null} type="text" placeholder="." class=${settings.theme.valueInput} .value=${value.privateuse[0] ?? ''} />
          <label>Private use subtags</label>
        </div>
      ` : null}
        
      </div>
      ` : null
    }

    /**
     * Generates a selected label for a given schema.
     */
    getLabel (value: Schema) {
      let label = ''
      const language = value.language ? getValueOfOptions(languageOptions, value.language) : null
      const region = value.region ? getValueOfOptions(regionCodesMerged, value.region) : null
      const script = value.script ? getValueOfOptions(scriptOptions, value.script) : null

      if (language && region) {
        label = `${language} as spoken in ${region}`
      }
      else if (language && script) {
        label = `${language} written with ${script}`
      }
      else if (language) {
        label = language
      }

      return label
    }

    /**
     * When you find a lot of results only 20 are shows, when scrolling more are shown.
     * The observer takes care of detecting scroll.
     */
    observerCallback (entries: Array<any>) {
      entries.forEach(entry => {
        if (entry.intersectionRatio) {
          const resultsWrapper = document.querySelector('.bcp47-results')!
          const scrollHeight = resultsWrapper.scrollHeight
          const clientHeight = resultsWrapper.clientHeight

          if (clientHeight < scrollHeight && this.maxItems < this.searchResults.length) {
            this.maxItems = this.maxItems + 20
            this.render()  
          }
        }
      })
    }

    /**
     * A re-usable autocomplete, used for Language, Region and Script.
     */
    autoComplete (label: string, options: Array<[string, string]>, value: any, key: SchemaStrings, disabled: boolean = false) {
      return html`
        <input disabled=${disabled ? true : null} placeholder="." class=${settings.theme.valueInput} onchange=${(event: InputEvent) => {
          value[key] = (event.target as HTMLInputElement).value
          this.value = stringify(value)
          this.render()
        }} list=${key} autocomplete="off" .value=${value[key] ?? ''}>
        <label>${label}</label>
        <datalist id=${key}>
          ${options.map(([optionValue, optionLabel]) => {
            return html`<option value=${optionValue} ?selected=${optionValue === value[key]}>${optionLabel}</option>`
          })}
        </datalist>
        <span class=${`bcp47-current-value-part-value ${settings.theme.partValue}`}>
          ${value[key] ? options.find(item => item[0] === value[key])?.[1]?.split(' (')?.[0] : null}
          <span class=${settings.theme.code}>${value[key]}</span>
        </span>
      `
    }

    /**
     * The search results
     */
     resultsWrapper () {
      return this.searchResults.length ? html`
      <div class=${`bcp47-results ${settings.theme.results}`}>
      ${this.searchResults
        .slice(0, this.maxItems)
        .map((item) => this.resultItem(item))}
        <div ref=${(element: HTMLDivElement) => {
          this.observer = new IntersectionObserver(this.observerCallback.bind(this), {
            root: document.querySelector('.bcp47-results'),
            rootMargin: '0px',
            threshold: 1.0
          })

          this.observer.observe(element)
        }} class="bcp47-observer"></div>
        <div class="bcp47-observer-spacer" style=${`--items: ${(this.searchResults.length - this.maxItems) * 41}px`}></div>
      </div>
    ` : null
    }

    /**
     * The template of one result item
     */
    resultItem ([bcp47, [name, _names]]: [string, [string, Array<string>]]) {
      return html`
      <button type="button" class=${`bcp47-result ${settings.theme.resultItem}`} onclick=${() => {
        this.value = bcp47
        this.isEditing = false
        this.searchResults = []
        this.maxItems = this.defaultMaxItems
        this.render()
      }}>
        <span class="bcp47-name">${name}</span>
        <span class=${`bcp47-code ${settings.theme.code}`}>${bcp47}</span>
      </button>`
    }
  }
  
  customElements.define('bcp47-picker', Bcp47Picker)
}
