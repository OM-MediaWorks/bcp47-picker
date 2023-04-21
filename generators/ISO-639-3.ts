/**
 * Execute this with Deno
 */

import { fetched } from './fetched.ts'
import { unzipSync } from 'npm:fflate'
import { parseTsv } from './parseTsv.ts'

const arrayBuffer = await fetched(`https://hisregistries.org/wp-content/uploads/filebase/rol/Language_Code_Data_20230221.zip`).then(response => response.arrayBuffer())
const uint8Array = new Uint8Array(arrayBuffer)
const unzippedFiles = unzipSync(uint8Array)

const languageIndexFileText = new TextDecoder().decode(unzippedFiles['LanguageIndex.tab'])
const languageIndex = parseTsv(languageIndexFileText)

const languageCodesFileText = new TextDecoder().decode(unzippedFiles['LanguageCodes.tab'])
const languageCodes = parseTsv(languageCodesFileText)

const output = []

for (const languageCode of languageCodes) {
  const alternativeNames = [...new Set(languageIndex.filter(item => item.LangID === languageCode.LangID).map(item => item.Name))]
  output.push([languageCode.LangID, [languageCode.Name, alternativeNames]])
}

Deno.writeTextFileSync('../static/data/iso-639-3.json', JSON.stringify(output))