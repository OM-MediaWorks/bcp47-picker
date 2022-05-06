import { Source } from './Source'
import { SilItem } from '../types'
import sil from '../data/sil'
import Fuse from 'fuse.js'

/**
  {
    "full": "nl-Latn-AW",
    "iana": [
      "Dutch",
      "Flemish"
    ],
    "iso639_3": "nld",
    "localname": "Nederlands",
    "localnames": [
      "Nederlands"
    ],
    "name": "Dutch",
    "names": [
      "Flemish"
    ],
    "region": "AW",
    "regionname": "Aruba",
    "script": "Latn",
    "sldr": true,
    "tag": "nl-AW",
    "windows": "nl-Latn-AW"
  },
 */

export class Sil extends Source {

  declare public index: Fuse<SilItem>
  public name = 'sil'

  constructor () {
    super()

    this.index = new Fuse(sil, {
      keys: [
        'name',
        'names',
        'region',
        'regionname',
        'script',
        'localname',
        'localnames',
        'sldr',
        'tag',
        'tags',
        'windows'
      ],
      fieldNormWeight: 1,
      threshold: 0,
      ignoreLocation: true,
      includeScore: false,
    })
  }

  item (item: SilItem) {
    return {
      title: `${item.name}`,
      description: `${item.name} in the region: ${item.regionname}`,
      bcp47: item.tag
    }
  }

}