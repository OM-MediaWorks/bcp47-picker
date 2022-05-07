import { SourceInterface } from '../SourceInterface'
import { GrnLanguage } from './GrnLanguage'
import grnData from './grn-data.js'
import { unpackRanges } from './unpackRanges'

export const languageIndex: Map<string, number> = new Map()

export class GRN implements SourceInterface {

  public name = 'grn'

  index(add: (name: string, index: number) => void): void {
    for (const [index, language] of grnData.languages.entries()) {
      add(grnData.names[language.n], index)

      // Adds an index by GRN number
      if (language.r) {
        add(language.r.toString(), index)
      }

      // Adds indices for each (alternative) name
      for (const name of unpackRanges(language.s)?.map(gIndex => grnData.names[gIndex]) ?? []) {
        add(name, index)
      }

      if (language.i) {
        add(language.i, index)
        languageIndex.set(language.i, index)
      }
    }
  }

  hydrate (index) {
    return new GrnLanguage(grnData.languages[index])
  }

}