import { Schema } from "bcp-47"

export type Theme = {
  valueContainer?: string
  valueInput?: string
  showPartsButton?: string
  showSearchButton?: string
  backButton?: string
  results?: string
  resultItem?: string
  code?: string
  resultCount?: string
  expandButton?: string
  collapseButton?: string
  valueContainerAdvanced?: string
  partValue?: string
  base?: string
  loading?: string
  advanced?: string
  valueItem?: string
  advancedTitle?: string
  addItemButton?: string
  alternativeNames?: string
  name?: string
}

export type SourceData = Array<[string, [string, Array<string>]]>

export type Settings = {
  sources: Array<string>
  theme: Theme,
  alternativeHtmlName: string
  forceCanonical: boolean
}

type KeyOf<T extends object> = Extract<keyof T, string>;
export type SchemaStrings = KeyOf<Schema>