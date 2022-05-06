export type IanaItem = {
  Type: string
  Subtag?: string
  Description: string
  Added: string
  ['Suppress-Script']?: string
  Scope?: string
  Macrolanguage?: string
  Comments?: string
  Deprecated?: string
  ['Preferred-Value']?: string
  Prefix?: string
  Tag?: string
}

export type RodItem = {
  'dialect_code': string
  'language_code': string
  'country_code': string
  'dialect_name': string
  'language_name': string
  'location_name': string
  'variant_names'?: Array<string>
}

export type SilItem = {
  "name": string
  "names"?: Array<string>
  "region": string
  "regionname": string
  "script": string
  "sldr": boolean
  "tag": string
  "tags": Array<string>
  "windows": string
}

export type Settings = {
}

export type RenderItem = {
  title: string,
  bcp47: string,
  description?: string,
  script?: string
}