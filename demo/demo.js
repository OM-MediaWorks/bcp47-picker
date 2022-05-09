import { register } from './index.cjs'

register()

const picker = document.createElement('bcp47-picker')
/** @ts-ignore */
// picker.value = 'de-AT'

document.body.appendChild(picker)

picker.addEventListener('updated', (event) => {
  console.log(event)
})