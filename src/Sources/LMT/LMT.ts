import { SourceInterface } from '../SourceInterface'
import { LmtLanguage } from './LmtLanguage'
import lmtData from './lmt-data.js'

const languagesMap = new Map(lmtData)

export class LMT implements SourceInterface {

  public name = 'lmt'

  index(add: (name: string, index: number) => void): void {
    for (const language of lmtData) {
        add(language[1], language[0])
        add(language[0], language[0])
    }
  }

  hydrate (index) {
    return new LmtLanguage([index, languagesMap.get(index)])
  }

}