const list = document.querySelectorAll('nav a')

function activeLink() {
    list.forEach((item) => item.classList.remove('active'))
    this.classList.add('active')
}

list.forEach((item) => item.addEventListener('click', activeLink))

let menuIcon = document.querySelector(".menuIcon")
let menu     = document.querySelector(".menu")

function fecharMenu() {
    menu.classList.remove("activeMenu")
}

function abrirMenu(event) {
    if (event.type === "touchstart") event.preventDefault()
    event.stopPropagation()
    menu.classList.toggle("activeMenu")
}

menuIcon.addEventListener("click",      abrirMenu)
menuIcon.addEventListener("touchstart", abrirMenu)

// Fecha ao clicar em qualquer link do menu
list.forEach((link) => {
    link.addEventListener("click",      fecharMenu)
    link.addEventListener("touchstart", fecharMenu)
})

// Fecha ao clicar fora do menu
document.addEventListener("click", function(event) {
    const dentroDoMenu    = menu.contains(event.target)
    const noIconeDoMenu   = menuIcon.contains(event.target)
    if (!dentroDoMenu && !noIconeDoMenu) {
        fecharMenu()
    }
})

document.addEventListener("touchstart", function(event) {
    const dentroDoMenu    = menu.contains(event.target)
    const noIconeDoMenu   = menuIcon.contains(event.target)
    if (!dentroDoMenu && !noIconeDoMenu) {
        fecharMenu()
    }
})
