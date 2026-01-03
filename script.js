let btn_open = document.getElementById('btn-open')
let btn_closed = document.getElementById('btn-closed')
let opcoes = document.querySelectorAll('.opcoes')

btn_open.addEventListener('click', () => {
    btn_open.style.display = "none"
    btn_closed.style.display = 'block'
    opcoes.forEach(opcoes => {
        opcoes.style.display = "block"
    })
})

btn_closed.addEventListener('click', () => {
    btn_open.style.display = 'block'
    btn_closed.style.display = 'none'
    opcoes.forEach(opcoes => {
        opcoes.style.display = "none"
    })
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 600) {
        location.reload()
    }
})