import '../src/index'

const picker1 = document.querySelector('bcp47-picker.first')
picker1.addEventListener('change', (event) => {
  console.log(event)
})


const picker2 = document.querySelector('bcp47-picker.second')
picker2.addEventListener('change', (event) => {
  console.log(event)
})