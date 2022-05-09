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
}

export type Settings = {
  sources: { [key: string]: Map<string, [name: string, names?: Array<string>]> }
  theme: Theme
}
