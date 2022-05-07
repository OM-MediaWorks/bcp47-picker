import { html, render } from 'uhtml'
import { Settings } from './types'
import TrieSearch from 'trie-search'
import { onlyUnique } from './helpers/onlyUnique'
import defaultSettings from './defaultSettings'
import { LanguageInterface } from './Sources/LanguageInterface'
import { icon } from './helpers/icon'
import { parse, stringify, Schema } from 'bcp-47'
import { iso15924 } from 'iso-15924'
import { iso31661 } from 'iso-3166'
import { iso6393 } from 'iso-639-3'
import { unM49 } from 'un-m49'
import './css/style.css'

export const register = async (settings: Settings = defaultSettings) => {

  class Bcp47Picker extends HTMLElement {

    public searchResults: Array<LanguageInterface> = []
    public searchIndex: typeof TrieSearch
    public value: string

    public showAdvanced: boolean = false
    public isEditing: boolean = false

    /**
     * We render first and then we index the data.
     * TODO make sure that we are finished with indexing when the end user types something.
     */
    async connectedCallback () {
      this.render()
      setTimeout(() => this.index(), 50)
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

      for (const source of Object.values(settings.sources)) {
        source.index((searchString: string, index: number) => {
          const searchStringSplit = searchString.toString().split(/ |-/)

          for (const part of searchStringSplit) {
            this.searchIndex.map(part.toString(), [source.name, index])
          }

          this.searchIndex.map(searchString.toString(), [source.name, index])
        })
      }
    }

    /**
     * Searches through the text index and returns an initiated object.
     */
    search (searchTerm: string | Array<string>): Array<LanguageInterface> {
      const indices = this.searchIndex.search(searchTerm)
      return indices.map(([sourceName, index]) => {
        return settings.sources[sourceName].hydrate(index)
      })
    }

    /**
     * The template of the whole widget.
     */
    template () {
      const valueParts: Schema = this.value ? parse(this.value) : undefined

      return html`

      ${this.value && !this.isEditing ? html`
        <div class="bcp47-value">
          <label>${this.value}</label>
          <button onclick=${() => {
            this.showAdvanced = !this.showAdvanced
            this.render()
          }}>${icon('gearFill')}</button>
          <button onclick=${() => {
            this.isEditing = !this.isEditing
            this.render()
          }}>${icon('search')}</button>
        </div>
      ` : null}

      ${this.showAdvanced ? html`
      <div class="bcp47-advanced">
        <div class="bcp47-language bcp47-current-value-part">
          <label>Language</label>
          ${this.languageDropdown(valueParts.language)}
        </div>

        <div class="bcp47-extended-language-subtags bcp47-current-value-part">
          <label>Extended language subtags</label>
          <input type="text" .value=${valueParts.extendedLanguageSubtags[0] ?? ''} maxlength="3" />
        </div>

        <div class="bcp47-script bcp47-current-value-part">
          <label>Script</label>
          ${this.scriptsDropdown(valueParts.script)}
        </div>

        <div class="bcp47-region bcp47-current-value-part">
          <label>Region</label>
          ${this.regionDropdown(valueParts.region)}
        </div>

        <div class="bcp47-extension-subtags bcp47-current-value-part">
          <label>Extension subtags</label>
          <div class="bcp47-inner">
            ${valueParts.extensions.map(extension => html`<input type="text" .value=${extension ?? ''} />`)}
          </div>
        </div>

        <div class="bcp47-private-use-subtags bcp47-current-value-part">
          <label>Private use subtags</label>
          <div class="bcp47-inner">
            x-<input type="text" .value=${valueParts.privateuse[0] ?? ''} />
          </div>
        </div>
        
      </div>
      ` : null}

      ${this.isEditing ? html`
      <div class="bcp47-search-wrapper">
        <button type="button" onclick=${() => {
          this.isEditing = false
          this.render()
        }}>${icon('arrowLeftShort')}</button>
        <label>Search</label>

        <input class="bcp47-search" type='search' onkeyup=${async (event: InputEvent) => {
          const searchTerm = (event.target as HTMLInputElement).value
          this.searchResults = this.search(searchTerm.split(' '))
            .splice(0, 200)
            .filter(onlyUnique('name'))
            .sort((a: LanguageInterface, b: LanguageInterface) => {
              return a.bcp47?.length - b.bcp47?.length
            })
          this.render()
        }} />

        <em>Please also search for country instead of the language name</em>

        ${this.searchResults.length ? html`
          <div class="bcp47-results">
          ${this.searchResults.map((item) => this.resultTemplate(item))}
          </div>
        ` : null}

      </div>
      ` : html``}
      `
    }

    languageDropdown (value?: string) {
      return html`
        <input list="countries" .value=${value ?? ''}>
        <datalist id="countries">
          ${iso6393.map(language => {
            const code = language.iso6391 ?? language.iso6393
            return html`<option value=${code} ?selected=${code === value}>${language.name}</option>`
          })}
        </datalist>
      `
    }

    scriptsDropdown (value?: string) {
      return html`
        <select>
        <option value="">-</option>
          ${iso15924.map(script => html`<option value=${script.code} ?selected=${script.code === value}>${script.name}</option>`)}
        </select>
      `
    }

    regionDropdown (value?: string) {
      return html`
        <input list="regions" .value=${value ?? ''}>
        <datalist id="regions">
          ${iso31661.map(region => {
            const code = region.alpha2 ?? region.alpha3
            return html`<option value=${code} ?selected=${code === value}>${region.name} (ISO 3166)</option>`
          })}
          ${unM49.map(region => html`<option value=${region.code} ?selected=${region.code === value}>${region.name} (unM49)</option>`)}
        </datalist>
      `
    }

    iso31661RegionDropdown (value?: string) {
      return html`
        <select>
        <option value="">-</option>
          ${iso31661.map(country => {
            const code = country.alpha2 ?? country.alpha3
            return html`<option value=${code} ?selected=${code === value}>${country.name}</option>`
          })}
        </select>
      `
    }

    unM49RegionDropdown (value?: string) {
      return html`
        <select>
        <option value="">-</option>
          ${unM49.map(country => {
            return html`<option value=${country.code} ?selected=${country.code === value}>${country.name}</option>`
          })}
        </select>
      `
    }

    /**
     * The template of one result item
     */
    resultTemplate (searchResult: LanguageInterface) {
      return html`
      <div class="bcp47-result" onclick=${() => {
        this.value = searchResult.bcp47
        this.isEditing = false
        this.render()
      }}>
        <span class="bcp47-name">${searchResult.name}</span>
        <span class="bcp47-code">${searchResult.bcp47}</span>
      </div>`
    }
  }
  
  customElements.define('bcp47-picker', Bcp47Picker)
}
