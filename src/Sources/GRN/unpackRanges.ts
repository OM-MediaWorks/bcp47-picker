export const unpackRanges = (range: Array<string | number>) => {
  if (!range) return []
  return range.flatMap(item => {
    if (typeof item === 'number') return [item]
    const [start, end] = item.split('-')

    const items = []
    for (let i: number = parseInt(start); i < parseInt(end); i++) {
      items.push(i)
    }
    return items
  })
}