import { Settings, SourceData } from './types'

/** @ts-ignore */
export default {
    get sources () {
      return (async () => {
        return { 
          lmt: await fetch('./data/lmt.json')
            .then(response => response.json())
            .then((json: SourceData) => new Map(json)), 
          grn: await fetch('./data/grn.json')
            .then(response => response.json())
            .then((json: SourceData) => new Map(json)), 
        }
      })()
    },
    theme: {
      valueInput: 'form-control',
      valueContainer: 'input-group',
      base: 'bootstrap',
      valueContainerAdvanced: 'form-floating mb-3',
      showPartsButton: 'btn btn-outline-secondary',
      showSearchButton: 'btn btn-outline-secondary',
      backButton: 'btn btn-outline-secondary',
      results: 'list-group',
      resultItem: 'list-group-item list-group-item-action',
      code: 'badge rounded-pill bg-light text-dark',
      resultCount: 'input-group-text',
      collapseButton: 'btn btn-outline-secondary',
      expandButton: 'btn btn-outline-secondary',
      loading: 'loading',
      advanced: 'mt-4',
      advancedTitle: 'mb-2',
      valueItem: 'item',
      addItemButton: 'btn btn-outline-secondary',
    }
  } as Settings