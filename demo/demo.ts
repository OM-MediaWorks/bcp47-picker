import { register } from '../src/index'

register()

const picker = document.createElement('bcp47-picker')
/** @ts-ignore */
// picker.value = 'de-AT'

document.body.appendChild(picker)

picker.addEventListener('updated', (event: Event) => {
  console.log(event)
})