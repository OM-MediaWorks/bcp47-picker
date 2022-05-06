import { html, render, Hole } from 'uhtml'
import { Settings, Language } from './types'
import grn from './data/grn'
import TrieSearch from 'trie-search'
import { onlyUnique } from './helpers/onlyUnique'
import './css/style.css'
import { LanguageProxy } from './helpers/LanguageProxy'

export const isoIndex: Map<string, number> = new Map()

export const register = async (settings: Settings) => {

  class Bcp47Picker extends HTMLElement {

    public searchResults: Array<Language> = []
    public searchIndex: typeof TrieSearch
    public value: string

    async connectedCallback () {
      setTimeout(() => {
        this.index()
      }, 50)
      this.render()
    }

    async index () {
      this.searchIndex = new TrieSearch('', {
        splitOnRegEx: false
      })

      for (const [index, language] of grn.languages.entries()) {
        const languageInstance = new LanguageProxy(language)
        this.searchIndex.map(languageInstance.name, index)

        // Adds an index by GRN number
        if (languageInstance.grn) {
          this.searchIndex.map(languageInstance.grn.toString(), index)
        }

        // Adds indices for each (alternative) name
        for (const name of languageInstance.names) {
          this.searchIndex.map(name, index)
        }

        // Adds index for iso2
        if (languageInstance.iso2) {
          this.searchIndex.map(languageInstance.iso2, index)
          isoIndex.set(languageInstance.iso2, index)
        }

        // Adds index for iso3
        if (languageInstance.iso3) {
          this.searchIndex.map(languageInstance.iso3, index)
          isoIndex.set(languageInstance.iso3, index)
        }
      }
    }
  
    async render () {
      // const selectedLanguage = 

      return render(this, html`
        <input class="bcp47-search" type='search' onkeyup=${async (event: InputEvent) => {
          const searchTerm = (event.target as HTMLInputElement).value
          this.searchResults = this.search(searchTerm)
          .splice(0, 80)
          .filter(onlyUnique('bcp47'))
          .sort((a: Language, b: Language) => b.population  - a.population)
          this.render()
        }} />

        ${this.value ? html`` : null}

        ${this.searchResults.length ? html`
          <div class="bcp47-results">
          ${this.searchResults.map(searchResult => html`
            <div class="bcp47-result" onclick=${() => console.log(searchResult)}>
              <span class="bcp47-name">${searchResult.name}</span>
              <span class="bcp47-code">${searchResult.bcp47}</span>

              <em class="bcp47-default-script">${searchResult.defaultScriptLabel}</em>

              ${searchResult.countries.length ? html`<p class="bcp47-countries">
                <strong>Countries: </strong>${searchResult.countries.join(', ')}
              </p>` : null}

              ${searchResult.peopleGroups.length ? html`<p class="bcp47-people-groups">
                <strong>People groups: </strong>${searchResult.peopleGroups.join(', ')}
              </p>` : null}
            </div>`)}
          </div>
          ` : null}
        `)
    }

    search (searchTerm: string): Array<Language> {
      const indices = this.searchIndex.search(searchTerm)
      return indices.map(index => {
        const language = grn.languages[index]
        return new LanguageProxy(language)
      })
    }
  }
  
  customElements.define('bcp47-picker', Bcp47Picker)
}
