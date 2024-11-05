let square1 = document.querySelector(`.square1`)
let square2 = document.querySelector(`.square2`)
let square3 = document.querySelector(`.square3`)

square1.addEventListener(`click`, () => {
    if (square1.style.backgroundColor === 'purple') {
        square1.style.backgroundColor = 'blue';
    } else {
        square1.style.backgroundColor = 'purple';
    }
}
)

square2.addEventListener(`click`, () => {
    if (square2.style.backgroundColor === 'pink') {
        square2.style.backgroundColor = 'red';
    } else {
        square2.style.backgroundColor = 'pink';
    }
}
)

square3.addEventListener(`click`, () => {
    if (square3.style.backgroundColor === 'green') {
        square3.style.backgroundColor = 'yellow';
    } else {
        square3.style.backgroundColor = 'green';
    }
}
)