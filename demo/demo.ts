import { register } from '../src/index'

register()

const picker = document.createElement('bcp47-picker')
/** @ts-ignore */
picker.value = 'ua-Cyrl-x-grn17916'

document.body.appendChild(picker)

picker.addEventListener('updated', (event: Event) => {
  console.log(event)
})