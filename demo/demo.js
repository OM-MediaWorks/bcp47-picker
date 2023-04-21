import { init } from '../src/init'

init()

init({
  alternativeHtmlName: 'bcp47-picker-rolv',
  sources: [
    'https://bcp47.danielbeeke.nl/data/lmt.json',
    'https://bcp47.danielbeeke.nl/data/rolv2.json'
  ],
})

init({
  alternativeHtmlName: 'bcp47-picker-iso',
  sources: [
    'https://bcp47.danielbeeke.nl/data/iso-639-3.json',
  ],
})

init({
  alternativeHtmlName: 'bcp47-picker-iso-forced',
  forceCanonical: true,
  sources: [
    'https://bcp47.danielbeeke.nl/data/iso-639-3.json',
  ],
})
const picker1 = document.querySelector('bcp47-picker#first')
picker1.addEventListener('change', (event) => {
  console.log(event)
})


const picker2 = document.querySelector('bcp47-picker-rolv#second')
picker2.addEventListener('change', (event) => {
  console.log(event)
})

const picker3 = document.querySelector('bcp47-picker-iso')
picker3.addEventListener('change', (event) => {
  console.log(event)
})