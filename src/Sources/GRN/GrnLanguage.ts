import grn from './grn-data'
import { unpackRanges } from './unpackRanges'
import memoizeGetters from 'memoize-getters'
import { LanguageInterface } from '../LanguageInterface'
import { languageIndex } from './GRN'
import {bcp47Normalize} from 'bcp-47-normalize'

class GrnLanguageUncached implements LanguageInterface {

  #language: any

  constructor (language) {
    this.#language = language
  }

  get original () { return this.#language }
  get grn () { return this.#language.g }
  get code () { return this.#language.i }
  get bcp47 () {
    if (this.code) return bcp47Normalize(this.code)
    if (this.parent?.code) return bcp47Normalize(`${this.parent.code}-x-grn${this.grn}`)

    // If the code gets here we have an invalid parent code.
    // This happens atleast for nfr.
    if (this.#language.o) return bcp47Normalize(this.#language.o)
  }
  get parent () { 
    if (!this.#language.p) return null
    const parentLanguageIndex = languageIndex.get(this.#language.p)
    if (!parentLanguageIndex) return null
    const parentLanguage = grn.languages[parentLanguageIndex]
    if (!parentLanguage) throw new Error('Could not find parent')
    return new GrnLanguage(parentLanguage)
  }
  get names () { return unpackRanges(this.#language.s)?.map(gIndex => grn.names[gIndex]) ?? [] }
  get name () { return grn.names[this.#language.n] }
}

export const GrnLanguage = memoizeGetters(GrnLanguageUncached)