/**
 * Execute this with Deno
 */

import { fetched } from "./fetched.ts"

type DialectsResponse = {
  data: Array<{
    dialect_code: string,
    language_code: string,
    country_code: string,
    dialect_name: string,
    language_name: string,
    location_name: string
  }>
}

type AlternativeNamesResponse = {
  data: Array<{
    dialect_code: string,
    variant_name: string
  }>
}

const grn = 'https://api.s.globalrecordings.net/public/'
const dialectsFile = 'rod_dialects.json'
const alternativeNamesFile = 'rod_alternatenameindex.json'

const dialects = await fetched(`${grn}${dialectsFile}`)
  .then(response => response.json()) as DialectsResponse

const alternativeNames = await fetched(`${grn}${alternativeNamesFile}`)
  .then(response => response.json()) as AlternativeNamesResponse

const output = []

for (const dialect of dialects.data) {
  const dialectAlternativeNames = alternativeNames.data.filter(alternativeName => alternativeName.dialect_code === dialect.dialect_code)
  output.push([`${dialect.language_code}-x-HIS${dialect.dialect_code}`, [`${dialect.language_name} ${dialect.dialect_name}`, dialectAlternativeNames.map(alternativeName => alternativeName.variant_name)]])
}

Deno.writeTextFileSync('../static/data/rolv2.json', JSON.stringify(output))