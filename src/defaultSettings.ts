import { Settings } from './types'
import grn from './Data/grn'
import lmt from './Data/lmt'

export default {
  sources: { 
    lmt: new Map(lmt), 
    grn: new Map(grn),
  },
  theme: {
    valueInput: 'form-control',
    valueContainer: 'input-group',
    partValue: '',
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
  }
} as Settings