import memoizeGetters from 'memoize-getters'
import { LanguageInterface } from '../LanguageInterface'

class LmtLanguageUncached implements LanguageInterface {

  #language: any

  constructor (language) {
    this.#language = language
  }

  get original () { return this.#language }
  get bcp47 () { return this.#language[0] }
  get name () { return this.#language[1] }
}

export const LmtLanguage = memoizeGetters(LmtLanguageUncached)