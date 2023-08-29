import { Settings, SourceData } from './types'

/** @ts-ignore */
export default {
  sources: [
    'https://bcp47.mediaworks.global/data/lmt.json',
    'https://bcp47.mediaworks.global/data/iso-639-3.json',
    'https://bcp47.mediaworks.global/data/rolv2.json'
  ],
  alternativeHtmlName: 'bcp47-picker',
    theme: {
      valueInput: 'form-control',
      valueContainer: 'input-group',
      base: 'bootstrap',
      valueContainerAdvanced: 'form-floating mb-3',
      showPartsButton: 'btn btn-outline-secondary',
      showSearchButton: 'btn btn-outline-secondary',
      backButton: 'btn btn-outline-secondary',
      results: 'list-group',
      resultItem: 'list-group-item list-group-item-action d-flex gap-2',
      code: 'badge rounded-pill bg-light text-dark',
      resultCount: 'input-group-text',
      collapseButton: 'btn btn-outline-secondary',
      expandButton: 'btn btn-outline-secondary',
      loading: 'loading',
      advanced: 'mt-4',
      advancedTitle: 'mb-2',
      valueItem: 'item',
      addItemButton: 'btn btn-outline-secondary',
      alternativeNames: 'text-truncate text-muted fst-italic fw-light pe-1',
      name: 'flex-nowrap bcp47-name-span'
    },
    forceCanonical: true,
  } as Settings