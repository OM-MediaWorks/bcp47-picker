import { init } from '../src/init'

init()

init({
  alternativeHtmlName: 'bcp47-picker-rolv',
  get sources () {
    return (async () => {
      return { 
        rolv: await fetch('./data/rolv2.json')
          .then(response => response.json())
          .then((json) => new Map(json)), 
        lmt: await fetch('./data/lmt.json')
          .then(response => response.json())
          .then((json) => new Map(json)), 

      }
    })()
  }
})

init({
  alternativeHtmlName: 'bcp47-picker-iso',
  get sources () {
    return (async () => {
      return { 
        iso: await fetch('./data/iso-639-3.json')
          .then(response => response.json())
          .then((json) => new Map(json)), 
      }
    })()
  }
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