import grn from '../data/grn'
import iana from '../data/iana'
import defaultScriptsArray from '../data/scripts'
import { isoIndex } from '../index'
import { iso3ToIso2 } from './iso3ToIso2'
import { unpackRanges } from './unpackRanges'


const scripts = iana.filter(item => item.Type === 'script')


const defaultScripts = new Map(defaultScriptsArray)
export class LanguageProxy {
  #language: any

  constructor (language) {
    this.#language = language
  }

  get original () { return this.#language }
  get population () { return this.#language.p }
  get grn () { return this.#language.r }
  get iso3 () { return this.#language.i }
  get iso2 () { return this.#language.i ? iso3ToIso2(this.#language.i) : null }
  get defaultScript () {
    return defaultScripts.get(this.iso3) ?? defaultScripts.get(this.iso2) ??
    (this.parent ? defaultScripts.get(this.parent.iso3) ?? defaultScripts.get(this.parent.iso2) : null)
  }
  get defaultScriptLabel () {
    if (!this.defaultScript) return
    return scripts.find(script => script.Subtag.toLowerCase() === this.defaultScript.toLowerCase())?.Description
  }
  get countries () { 
    return this.#language.c?.map(countryCode => grn.names[grn.countries[countryCode]] ?? countryCode) ?? []
   }
  get bcp47 () {
    if (this.iso2) return this.iso2
    if (this.parent) return `${this.parent.iso2}-x-grn-${this.grn}`
  }
  get parent () { 
    if (!this.#language.o) return null
    const parentLanguageIndex = isoIndex.get(this.#language.o)
    if (!parentLanguageIndex) return null
    const parentLanguage = grn.languages[parentLanguageIndex]
    if (!parentLanguage) throw new Error('Could not find parent')
    return new LanguageProxy(parentLanguage)
  }
  get names () { return unpackRanges(this.#language.s)?.map(gIndex => grn.names[gIndex]) ?? [] }
  get name () { return grn.names[this.#language.n] }
  get peopleGroups () { return unpackRanges(this.#language.g)?.map(gIndex => grn.names[gIndex]) ?? [] }
}