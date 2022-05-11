import '../dist/bcp47-picker.modern'

const picker = document.createElement('bcp47-picker')
document.body.appendChild(picker)

picker.addEventListener('updated', (event) => {
  console.log(event)
})