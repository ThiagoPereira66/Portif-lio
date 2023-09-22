const menu = document.querySelector('#abrir-menu');

function mostrarMenu () {
    const links = document.querySelector('#menu');
    links.classList.toggle('active');
}


menu.addEventListener('click', mostrarMenu)