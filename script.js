const button = document.getElementById("modal")
const modal = document.querySelector("#dialog")
const fecharModal = document.getElementById('close')
const salvar = document.getElementById('salvar')
const modal1 = document.getElementById('modal1')
const modal2 = document.getElementById('modal2')





button.onclick = function () {
    modal.showModal()
    
}

modal1.onclick = function () {
    modal.showModal()
}

fecharModal.onclick = function () {
    modal.close()
}

salvar.onclick = function () {
    modal.close()
    alert('Salvo com sucesso')
}


// ação do menu

const menu = document.querySelector('#abrir-menu')
const menus = document.querySelector('#projetos')


function mostrarMenu(){
    const menu = document.querySelector('nav')
    menu.classList.toggle('active');
}

function fecharMenus(){
    const menus = document.querySelector('nav')
    menus.classList.toggle('active')
}

menus.addEventListener('click', fecharMenus)
menu.addEventListener('click', mostrarMenu)