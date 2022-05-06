import { register } from '../src/index'

register({})

const picker = document.createElement('bcp47-picker')
/** @ts-ignore */
picker.value = 'ua-x-grn-17916'

document.body.appendChild(picker)

picker.addEventListener('change', (event: Event) => {
  console.log(event)
})