import { init } from '../src/init'

if (location.pathname === '/alone') {
  document.body.innerHTML = `
  <div class="page">
    <form>
      <bcp47-picker name="language" multiple value="nl,en"></bcp47-picker>
      <button>Submit</button>
    </form>
  </div>
  `

  const form = document.querySelector('form')
  
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(form);
    console.log(data, form)
    for (const [name,value] of data) {
      console.log(name, ":", value)
    }
  })

  init({
    sources: [
      'https://bcp47.mediaworks.global/data/lmt.json',
      // 'https://bcp47.mediaworks.global/data/iso-639-3.json',
      // 'https://bcp47.mediaworks.global/data/rolv2.json'
    ],  
  }
  )
}

if (location.pathname !== '/alone') {
  init()

  init({
    alternativeHtmlName: 'bcp47-picker-rolv',
    sources: [
      'https://bcp47.mediaworks.global/data/lmt.json',
      'https://bcp47.mediaworks.global/data/rolv2.json'
    ],
  })
  
  init({
    alternativeHtmlName: 'bcp47-picker-iso',
    sources: [
      'https://bcp47.mediaworks.global/data/iso-639-3.json',
    ],
  })
  
  init({
    alternativeHtmlName: 'bcp47-picker-iso-forced',
    forceCanonical: true,
    sources: [
      'https://bcp47.mediaworks.global/data/iso-639-3.json',
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
}

