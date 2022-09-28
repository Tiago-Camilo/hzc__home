const botonMenu = document.querySelector('.cabeçalho__menu')
const menu = document.querySelector('.menu__lateral')

botonMenu.addEventListener('click', () => {
    menu.classList.toggle('menu__lateral--ativo')
})