import { init } from '../src/init'

init()

init({
  alternativeHtmlName: 'bcp47-picker-extra',
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

const picker1 = document.querySelector('bcp47-picker#first')
picker1.addEventListener('change', (event) => {
  console.log(event)
})


const picker2 = document.querySelector('bcp47-picker-extra#second')
picker2.addEventListener('change', (event) => {
  console.log(event)
})