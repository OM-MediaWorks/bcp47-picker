import Fuse from 'fuse.js'
import { RenderItem } from '../types'
import { html } from 'uhtml'

export abstract class Source {

  public index: Fuse<any>
  public name: string

  search (term: string, callback: (renderItem: RenderItem, event: InputEvent) => void) {
    const results = this.index.search(term).map(searchResult => searchResult.item)
    return results.map(rawItem => {
      const renderItem = this.item(rawItem)

      return html`
      <div onclick=${(event) => callback(renderItem, event)} class="search-result" type=${this.name}>
        <h4 class="title">${renderItem.title} (${renderItem.bcp47})</h4>
        <p class="description">${renderItem.description}</p>
      </div>
    `
    })
  }

  abstract item (item: any): RenderItem
}