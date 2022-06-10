import '../dist/bcp47-picker.modern.js'

const picker = document.querySelector('bcp47-picker.first')
picker.addEventListener('change', (event) => {
  console.log(event)
})