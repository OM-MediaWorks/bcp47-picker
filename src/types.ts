import { SourceInterface } from './Sources/SourceInterface'

export type Settings = {
  sources: { [key: string]: SourceInterface }
}
