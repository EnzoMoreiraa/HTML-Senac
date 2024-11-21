const canvas = document.getElementById("pong");
const context = canvas.getContext("2d");

const paddleWidth = 10,
  paddleHeight = 100,
  ballRadius = 10;

let leftPaddle = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
};
let rightPaddle = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
};

let ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  dx: 5,
  dy: 5,
};

let wPressed = false;
let sPressed = false;
let upArrowPressed = false;
let downArrowPressed = false;

let playerScore = 0;
let botScore = 0;

function drawPaddle(x, y) {
  context.fillStyle = "#FFF";
  context.fillRect(x, y, paddleWidth, paddleHeight);
}

function drawBall(x, y) {
  context.fillStyle = "#FFF";
  context.beginPath();
  context.arc(x, y, ballRadius, 0, Math.PI * 2);
  context.fill();
}

function drawScore() {
  context.fillStyle = "#FFF";
  context.font = "32px Arial";
  context.fillText("Jogador: " + playerScore, 50, 40);
  context.fillText("Bot: " + botScore, canvas.width - 150, 40);
}

function movePaddles() {
  if ((wPressed || upArrowPressed) && leftPaddle.y > 0) {
    leftPaddle.y -= 10;
  }
  if ((sPressed || downArrowPressed) && leftPaddle.y < canvas.height - paddleHeight) {
    leftPaddle.y += 10;
  }

  let errorChance = Math.random();
  let botSpeed = 3;

  if (errorChance > 0.5) {
    rightPaddle.y = ball.y - paddleHeight / 2;
  } else {
    rightPaddle.y += (Math.random() > 0.5 ? 1 : -1) * botSpeed;
  }

  if (rightPaddle.y < 0) rightPaddle.y = 0;
  if (rightPaddle.y > canvas.height - paddleHeight) rightPaddle.y = canvas.height - paddleHeight;
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;

  if (ball.y + ballRadius > canvas.height || ball.y - ballRadius < 0) {
    ball.dy = -ball.dy;
  }

  if (
    ball.x - ballRadius < leftPaddle.x + paddleWidth &&
    ball.y > leftPaddle.y &&
    ball.y < leftPaddle.y + paddleHeight
  ) {
    ball.dx = -ball.dx;
    let angle = (ball.y - (leftPaddle.y + paddleHeight / 2)) / (paddleHeight / 2); 
    ball.dy = 5 * angle; 
    ball.dx *= 1.1;  // Aumenta a velocidade após o contato com a raquete
  }

  if (
    ball.x + ballRadius > rightPaddle.x &&
    ball.y > rightPaddle.y &&
    ball.y < rightPaddle.y + paddleHeight
  ) {
    ball.dx = -ball.dx;
    let angle = (ball.y - (rightPaddle.y + paddleHeight / 2)) / (paddleHeight / 2);
    ball.dy = 5 * angle;
    ball.dx *= 1.1;  // Aumenta a velocidade após o contato com a raquete
  }

  if (ball.x + ballRadius < 0) {
    botScore++;
    resetBall();
  }
  if (ball.x - ballRadius > canvas.width) {
    playerScore++;
    resetBall();
  }
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.dx = 5 * (Math.random() > 0.5 ? 1 : -1);  // Garante que a direção da bola seja aleatória
  ball.dy = 5;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawPaddle(leftPaddle.x, leftPaddle.y);
  drawPaddle(rightPaddle.x, rightPaddle.y);
  drawBall(ball.x, ball.y);
  drawScore();

  moveBall();
  movePaddles();
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp") {
    upArrowPressed = true;
  }
  if (event.key === "ArrowDown") {
    downArrowPressed = true;
  }
  if (event.key === "w") {
    wPressed = true;
  }
  if (event.key === "s") {
    sPressed = true;
  }
});

document.addEventListener("keyup", function (event) {
  if (event.key === "ArrowUp") {
    upArrowPressed = false;
  }
  if (event.key === "ArrowDown") {
    downArrowPressed = false;
  }
  if (event.key === "w") {
    wPressed = false;
  }
  if (event.key === "s") {
    sPressed = false;
  }
});

function gameLoop() {
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();