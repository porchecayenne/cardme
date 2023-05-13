//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      const aText = document.querySelector('a-text')
      aText.setAttribute('value', 'llll')
    }, 5000)
  })
  