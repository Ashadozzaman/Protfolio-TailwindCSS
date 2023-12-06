const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const body = document.querySelector('body')
const dark = document.querySelector('#dark')
const Hlinks = document.querySelectorAll('.Hlink')

hamburger.addEventListener("click", () => {
    menu.classList.toggle('hidden')
    hamburger.classList.toggle('bg-white')
})

dark.addEventListener("click", () => {
    body.classList.toggle('dark')
})

Hlinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle('hidden')
        hamburger.classList.toggle('bg-white')
    })
})