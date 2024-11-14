let movable = document.querySelector("#movable");
let posX = 0;
let posY = 0;
const move = 10;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp" || event.key === "w") {
        posY -= move;
        if (posY < 0) {
            posY = 0;
        }
    } else if (event.key === "ArrowDown" || event.key === "s") {
        posY += move;
        if (posY > 350) {
            posY = 350;
        }
    } else if (event.key === "ArrowLeft" || event.key === "a") {
        posX -= move;
        if (posX < 0) {
            posX = 0;
        }
    } else if (event.key === "ArrowRight" || event.key === "d") {
        posX += move;
        if (posX > 550) {
            posX = 550;
        }
    }

    movable.style.top = posY + "px";
    movable.style.left = posX + "px";
});
