/**
 * May be used for filtering array's.
 * @param value 
 * @param index 
 * @param self 
 */

export const onlyUnique = (key: string = '') => (value: any, index: number, self: Array<any>) => {
  if (key) {
      const item = self.find(inner => inner[key] === value[key])
      return self.indexOf(item) === index && value;
  }
  return self.indexOf(value) === index && value;
}