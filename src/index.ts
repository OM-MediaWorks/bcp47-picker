import { html, render } from 'uhtml'
import { Settings } from './types'
import TrieSearch from 'trie-search'
import { onlyUnique } from './helpers/onlyUnique'
import defaultSettings from './defaultSettings'
import { icon } from './helpers/icon'
import { parse, stringify, Schema } from 'bcp-47'
import { iso15924 } from 'iso-15924'
import { iso31661 } from 'iso-3166'
import { iso6393 } from 'iso-639-3'
import { unM49 } from 'un-m49'
import { debounce } from './helpers/debounce'
import './css/style.css'

export const register = async (settings: Settings = defaultSettings) => {

  class Bcp47Picker extends HTMLElement {

    public searchResults: Array<any> = []
    public searchIndex: typeof TrieSearch
    public value: string = ''

    public showIndividualComponents: boolean = false
    public showAdvanced: boolean = false
    public isEditing: boolean = false
    public maxItems: number = 20
    private observer: any = false
    public defaultMaxItems: number = 20

    public bcp47Index: Map<string, Array<[source: string, index: number]>> = new Map()

    /**
     * We render first and then we index the data.
     * TODO make sure that we are finished with indexing when the end user types something.
     */
    async connectedCallback () {
      this.render()
      if (settings.theme.base) this.classList.add(settings.theme.base)
      setTimeout(() => {
        this.index()
        this.render()
      }, 50)
    }
  
    async render () {
      return render(this, this.template())
    }

    /**
     * Creates the search index.
     */
    async index () {
      this.searchIndex = new TrieSearch('', {
        // splitOnRegEx: /\s|\-/g
      })

      for (const [sourceName, sourceItems] of Object.entries(settings.sources)) {
        for (const [bcp47, [name, names]] of sourceItems.entries()) {
          this.searchIndex.map(name, [sourceName, bcp47])

          if (names) {
            for (const name of names) {
              this.searchIndex.map(name, [sourceName, bcp47])
            }  
          }
        }
      }
    }

    /**
     * Searches through the text index and returns an initiated object.
     */
    search (searchTerm: string | Array<string>): [number, [string, Array<string>]] {
      const bcp47Strings = this.searchIndex.search(searchTerm)

      return bcp47Strings.map(([sourceName, index]: [string, number]) => {
        return [index, settings.sources[sourceName].get(index.toString())]
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
      console.log(this.maxItems)
      const valueParts: Schema = this.value ? parse(this.value) : {
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

      let label = null
      if (this.value) {
        for (const source of Object.keys(settings.sources)) {
          if (!label) 
            label = settings.sources[source].get(this.value)?.[0]
        }

        if (!label) {
          const language = (iso6393.find(language => language.iso6391 === valueParts.language) ??
            iso6393.find(language => language.iso6393 === valueParts.language))?.name
          const region = (iso31661.find(region => region.alpha2 === valueParts.region) ??
            iso31661.find(region => region.alpha3 === valueParts.region) ??
            unM49.find(region => region.code === valueParts.region))?.name
          const script = iso15924.find(script => script.code === valueParts.script)?.name

          if (language && region) {
            label = `${language} as spoken in ${region}`
          }
          else if (language && script) {
            label = `${language} written with ${script}`
          }
          else if (language) {
            label = language
          }
        }
      }

      return html`
        <div class=${`bcp47-value ${settings.theme.valueContainer}`}>
          ${this.value ? html`
            <div onclick=${async () => {
              if (!this.value) {
                this.showIndividualComponents = false
                this.isEditing = true
                await this.render()
                ;(document.querySelector('.bcp47-search') as HTMLInputElement).focus()  
              }
            }} class=${`bcp47-value-wrapper ${settings.theme.valueInput}`}>
              <span class="bcp47-value-label">
                ${this.value ? label : '- No language selected -'}
              </span>

              ${this.value ? html`
                <span class=${`bcp47-value-bcp47 ${settings.theme.code}`}>
                  ${this.value}
                </span><span class="bcp47-remove-value" onclick=${() => {
                  this.value = ''
                  this.render()
                }}>${icon('x')}</span>
              ` : null}
            </div>
          ` : null}
          
          ${!this.value ? html`
            <input placeholder="Search for a language, region or dialect" class=${`bcp47-search ${settings.theme.valueInput}`} type='search' onkeyup=${async (event: InputEvent) => {
              const searchTerm = (event.target as HTMLInputElement).value

              this.searchResults = this.search(searchTerm.split(' '))
              
              this.maxItems = this.defaultMaxItems

              this.render()
            }} />

            ${this.searchResults.length ? html`
            <span class=${`search-results-count ${settings.theme.resultCount}`}>
              ${this.searchResults
                .length}
            </span>
            ` : null}
          `: null}

          ${this.showIndividualComponents ? html`
          <button class=${`${this.showAdvanced ? 'active' : ''} ${this.showAdvanced ? settings.theme.collapseButton : settings.theme.expandButton}`} onclick=${async () => {
            this.showAdvanced = !this.showAdvanced
            await this.render()
          }}>${icon(this.showAdvanced ? 'chevronContract' : 'chevronExpand')}</button>
          ` : null}

          <button class=${`button ${this.showIndividualComponents ? 'active' : ''} ${settings.theme.showPartsButton}`} onclick=${() => {
            this.showIndividualComponents = !this.showIndividualComponents

            if (this.showIndividualComponents && (
              valueParts.privateuse.length ||
              valueParts.extensions.length
            )) {
              this.showAdvanced = true
            }

            this.render()
          }}>${icon('gearFill')}</button>

        </div>

      ${this.showIndividualComponents && !this.searchResults.length ? html`
      <div class="bcp47-advanced mt-4">
        <h6 class="mb-2">Manual configuration</h6>

        <div class=${`bcp47-language bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.languageField(valueParts)}
        </div>

        ${this.showAdvanced ? html`
        <div class=${`bcp47-region bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          <input disabled=${!valueParts.language ? true : null} placeholder="." class=${settings.theme.valueInput} type="text" .value=${valueParts.extendedLanguageSubtags[0] ?? ''} maxlength="3" />
          <label>Extended language subtags</label>
        </div>
        ` : null}

        <div class=${`bcp47-script bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.scriptsField(valueParts)}
        </div>

        <div class=${`bcp47-region bcp47-current-value-part ${settings.theme.valueContainerAdvanced}`}>
          ${this.regionField(valueParts)}
        </div>

        ${this.showAdvanced ? html`
        <div class=${`bcp47-region bcp47-current-value-part-normal ${settings.theme.valueContainerAdvanced}`}>
            <input disabled=${!valueParts.language ? true : null} placeholder="." type="text" class=${settings.theme.valueInput} .value=${valueParts.extensions[0] ?? ''} />
            <label>Extension subtags</label>
        </div>
        ` : null}

        ${this.showAdvanced ? html`
          <div class=${`bcp47-region bcp47-current-value-part-normal ${settings.theme.valueContainerAdvanced}`}>
            <input disabled=${!valueParts.language ? true : null} type="text" placeholder="." class=${settings.theme.valueInput} .value=${valueParts.privateuse[0] ?? ''} />
            <label>Private use subtags</label>
          </div>
        ` : null}
        
      </div>
      ` : null}

      ${this.searchResults.length ? html`
      <div class=${`bcp47-results ${settings.theme.results}`}>
      ${this.searchResults
        .slice(0, this.maxItems)

        .map((item) => this.resultTemplate(item))}
        <div ref=${(element: HTMLDivElement) => {
          this.observer = new IntersectionObserver(debounce(this.observerCallback.bind(this), 300), {
            root: document.querySelector('.bcp47-results'),
            rootMargin: '0px',
            threshold: 1.0
          })

          this.observer.observe(element)
        }} class="bcp47-observer"></div>
      </div>
    ` : null}
      `
    }

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

    languageField (value: Schema) {
      return html`
        <input placeholder="." class=${settings.theme.valueInput} onchange=${(event: InputEvent) => {
          value.language = (event.target as HTMLInputElement).value
          this.value = stringify(value)
          this.render()
        }} list="countries" autocomplete="off" .value=${value?.language ?? ''}>
        <label>Language</label>
        <datalist id="countries">
          ${iso6393.map(language => {
            const code = language.iso6391 ?? language.iso6393
            return html`<option value=${code} ?selected=${code === value.language}>${language.name}</option>`
          })}
        </datalist>
        <span class=${`bcp47-current-value-part-value ${settings.theme.partValue}`}>
          ${
            (iso6393.find(language => language.iso6391 === value.language) ??
            iso6393.find(language => language.iso6393 === value.language))?.name
          }

          <span class=${settings.theme.code}>${value.language}</span>
        </span>

      `
    }

    scriptsField (value: Schema) {
      return html`
        <input disabled=${!value.language ? true : null} placeholder="." class=${settings.theme.valueInput} onchange=${(event: InputEvent) => {
          value.script = (event.target as HTMLInputElement).value
          this.value = stringify(value)
          this.render()
        }} list="scripts" autocomplete="off" .value=${value.script ?? ''}>
        <label>Script</label>
        <datalist id="scripts">
          ${iso15924.map(script => html`<option value=${script.code} ?selected=${script.code === value.script}>${script.name}</option>`)}
        </datalist>
        <span class="bcp47-current-value-part-value">
          ${iso15924.find(script => script.code === value.script)?.name}
          <span class=${settings.theme.code}>${value.script}</span>
        </span>
      `
    }

    regionField (value: Schema) {
      return html`
        <input disabled=${!value.language ? true : null} placeholder="." class=${settings.theme.valueInput} onchange=${(event: InputEvent) => {
          value.region = (event.target as HTMLInputElement).value
          this.value = stringify(value)
          this.render()
        }} list="regions" autocomplete="off" .value=${value.region ?? ''}>
        <label>Region</label>
        <datalist id="regions">
          ${iso31661.map(region => {
            const code = region.alpha2 ?? region.alpha3
            return html`<option value=${code} ?selected=${code === value.region}>${region.name} (ISO 3166)</option>`
          })}
          ${unM49.map(region => html`<option value=${region.code} ?selected=${region.code === value.region}>${region.name} (unM49)</option>`)}
        </datalist>
        <span class="bcp47-current-value-part-value">
          ${
            (iso31661.find(region => region.alpha2 === value.region) ??
            iso31661.find(region => region.alpha3 === value.region) ??
            unM49.find(region => region.code === value.region))?.name
          }
          <span class=${settings.theme.code}>${value.region}</span>
        </span>
      `
    }

    /**
     * The template of one result item
     */
    resultTemplate ([bcp47, [name, _names]]: [string, [string, Array<string>]]) {
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
