let nome = prompt("Qual seu nome?")

document.write (`<h2><u>Olá ${nome}</u></h2>`) //Será escrito no HTML

let titulo = document.getElementById(`título`);
titulo.innerText = `Site do ${nome}`

let textos = document.getElementsByClassName(`texto`);

// Exibe o número de elementos com esta classe
console.log(textos.lenght)

//Modifica o primeiro elemento da coleção
textos[0].innerText = `Primeiro Texto Modificado`

textos[1].innerHTML = `<i>Texto em itálico</i>`

let texto = document.getElementById(`texto`);

// Altera a cordo texto
texto.style.color = `blue`
texto.style.fontSize = `20px`

texto.innerText = "Texto com style"