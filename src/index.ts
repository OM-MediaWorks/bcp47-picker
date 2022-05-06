import { html, render, Hole } from 'uhtml'
import { Sil } from './Sources/Sil'
import { Iana } from './Sources/Iana'
import { Rod } from './Sources/Rod'
import { RenderItem, Settings } from './types'
import { Source } from './Sources/Source'
import { debounce } from './helpers/debounce'

export const register = async (settings: Settings) => {

  class Bcp47Picker extends HTMLElement {

    public searchIndices: { [key: string]: Source }
    public searchResults: Array<Hole>
    public renderTimeout

    constructor () {
      super()
      this.searchIndices = {
        sil: new Sil(),
        rod: new Rod(),
        // iana: new Iana(),
      }
    }

    async connectedCallback () {
      this.render()
    }
  
    async render () {
      return render(this, html`
        <input type='search' onkeyup=${debounce(async (event: InputEvent) => {
          const searchTerm = (event.target as HTMLInputElement).value

          if (!searchTerm) {
            this.searchResults = []
            await this.render()
          }
          else {
            if (this.renderTimeout) clearTimeout(this.renderTimeout)

            this.renderTimeout = setTimeout(async () => {
              this.searchResults = Object.values(this.searchIndices)
              .flatMap(searchIndex => searchIndex.search(searchTerm, (item: RenderItem) => {
                console.log(item)
              }))
    
              await this.render()  
            }, 100)  
          }

        }, 200)} />

        ${this.searchResults}
      `)
    }
  }
  
  customElements.define('bcp47-picker', Bcp47Picker)
}
