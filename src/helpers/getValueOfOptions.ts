export const getValueOfOptions = (
  options: Array<[string, string]>, value: string
) => {
  return options.find(option => option[0] === value)?.[1]//?.split(' (')?.[0]
}