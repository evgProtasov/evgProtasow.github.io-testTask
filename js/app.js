const menu = document.getElementById('header-icon')
const nav = document.querySelector('.header-navbar')


menu.addEventListener('click', () => {
    nav.classList.toggle('active')
    menu.classList.toggle('bx-x')
})

console.log(menu)