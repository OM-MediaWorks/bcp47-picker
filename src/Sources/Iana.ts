import { Source } from './Source'
import { IanaItem } from '../types'
import iana from '../data/iana'
import Fuse from 'fuse.js'

export class Iana extends Source {

  declare public index: Fuse<IanaItem>
  public name = 'iana'

  constructor () {
    super()

    this.index = new Fuse(iana, {
      keys: [
        'Description',
        'Subtag',
        'Tag'
      ],
      fieldNormWeight: 1,
      threshold: 0.1,
      includeScore: false,
    })
  }

  item (item: IanaItem) {
    return {
      title: item.Description,
      description: item.Description,
      bcp47: ''
    }
  }

}