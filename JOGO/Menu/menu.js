let showCredits = document.querySelector("#showCredits");
let credits = document.querySelector("#credits");

showCredits.addEventListener("click", () => {
  credits.classList.toggle("visible"); // Adiciona ou remove a classe para alternar a visibilidade
});
