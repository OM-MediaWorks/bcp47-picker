export interface SourceInterface {

  name: string
  
  index (indexMethod: (searchString: string, index: number) => void): void

  hydrate (key) 
}