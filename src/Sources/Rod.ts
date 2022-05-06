import { Source } from './Source'
import { RodItem } from '../types'
import rod from '../data/rod'
import Fuse from 'fuse.js'

/**
  {
    "dialect_code": "00002",
    "language_code": "vie",
    "country_code": "VN",
    "dialect_name": "South",
    "language_name": "Vietnamese",
    "location_name": "Vietnam",
    "variant_names": [
      "เวียดนามใต้",
      "Annamese",
      "Southern Vietnamese",
      "Tieng Viet",
      "Tiếng Việt",
      "Vietnamese: South",
      "Vietnamese: Southern Vietnamese"
    ]
  },
 */

export class Rod extends Source {

  declare public index: Fuse<RodItem>
  public name = 'rod'

  constructor () {
    super()

    this.index = new Fuse(rod, {
      keys: [
        'location_name', 
        'language_name', 
        'dialect_name',
        'dialect_code',
        'language_code',
        'country_code',
        'variant_names'
      ],
      fieldNormWeight: 1,
      threshold: 0.1,
      includeScore: false,
    })
  }

  item (item: RodItem) {
    return {
      title: `${item.dialect_name}`,
      description: `A dialect. ${item.variant_names ? `Also called: ${item.variant_names?.join(', ')}` : ''}`,
      bcp47: `${item.language_code}-${item.country_code}-${item.dialect_code}`
    }
  }

}