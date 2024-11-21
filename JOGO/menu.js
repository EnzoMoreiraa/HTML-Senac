let showCredits = document.querySelector("#showCredits");
let credits = document.querySelector("#credits");
let hiddenCredits = document.querySelector("#exit");

showCredits.addEventListener("click", () => {
  credits.classList.toggle("hidden");
});

hiddenCredits.addEventListener("click", () => {
  credits.classList.toggle("hidden");
});
