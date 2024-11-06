/* Atividade 01 */

let square1 = document.querySelector(`.square1`)
let square2 = document.querySelector(`.square2`)
let square3 = document.querySelector(`.square3`)

square1.addEventListener(`click`, () => {
    square1.style.backgroundColor = square1.style.backgroundColor == 'purple' ? 'blue' : 'purple';
    //toma os operador dele
}
)

square2.addEventListener(`click`, () => {
    square2.style.backgroundColor = square2.style.backgroundColor == 'pink' ? 'red' : 'pink'
}
)

square3.addEventListener(`click`, () => {
    square3.style.backgroundColor = square3.style.backgroundColor == 'green' ? 'yellow' : 'green'
}
)

/* Atividade 02 */

let click = document.querySelector('.Click')
let reset = document.querySelector('.Reset')
let cc = document.querySelector('.num')
let i = 0

click.addEventListener('click', () => {
    i++;
    cc.innerHTML = i
})

reset.addEventListener('click', () => {
    i = 0
    cc.innerHTML = i
    
})

/* Atividade 03 */

let text = document.querySelector('.Text')
let button = document.querySelector('.button')

button.addEventListener('click', () => {
    text.innerHTML = text.innerHTML == '' ? "Cidade Casca de Bill Amostradinho" : ''
})

/* Atividade 04 */

let change = document.querySelector('.Change')

let textChanged = document.querySelector('.textChanged')

change.addEventListener('click', () => {
    let insert = prompt('Insira um texto')
    textChanged.innerHTML = insert
    
})

/* Atividade 05 */

let tecla = document.querySelector('.tecla')

document.addEventListener('keydown', (press) => {
    tecla.innerHTML = `Você precionou <br> - ${press.key} -`
})