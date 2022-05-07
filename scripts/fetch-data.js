import fs from 'fs'

const getIana = async () => {
  const url = 'http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry'
  const response = await fetch(url)
  const text = await response.text()

  const keys = new Set()
  const items = text.split('\n%%\n')
  .map(block => {
    if (block.includes('File-Date')) return null
    const item = {}
    const lines = block.replaceAll('  ', 'Comments: ').split('\n')
    for (const line of lines) {
      const [key, value] = line.split(': ')
      if (!key && !value) continue
      if (['Comments', 'Description'].includes(key)) {
        if (!item[key]) item[key] = []
        item[key].push(value)
      }
      else {
        item[key] = value
      }
      keys.add(key)
    }

    if (!item.Type) console.log(item)

    return item
  })
  .filter(Boolean)

  fs.writeFileSync('./src/data/iana.js', 'export default ' + JSON.stringify(items, null, 2))
}

const getRod = async () => {
  const response = await fetch('https://api.s.globalrecordings.net/public/rod_dialects.json')
  const { data } = await response.json()

  const responseNames = await fetch('https://api.s.globalrecordings.net/public/rod_alternatenameindex.json')
  const { data: names } = await responseNames.json()

  for (const nameItem of names) {
    const item = data.find(dialect => dialect.dialect_code === nameItem.dialect_code)
    if (item) {
      if (!item['variant_names']) item['variant_names'] = []
      item['variant_names'].push(nameItem.variant_name)  
    }
  }

  fs.writeFileSync('./src/data/rod.js', 'export default ' + JSON.stringify(data, null, 2))
}

const getSil = async () => {
  const response = await fetch('https://raw.githubusercontent.com/sillsdev/mui-language-picker/master/src/data/langtags.json')
  const data = await response.json()
  fs.writeFileSync('./src/data/sil.js', 'export default ' + JSON.stringify(data.slice(3), null, 2))
}

getRod()
getIana()
getSil()

// https://datahub.io/core/language-codes/r/language-codes-full.json