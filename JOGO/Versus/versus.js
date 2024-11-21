const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const paddleWidth = 10,
  paddleHeight = 100,
  ballSize = 15;
let paddleLeftY = canvas.height / 2 - paddleHeight / 2;
let paddleRightY = canvas.height / 2 - paddleHeight / 2;
let ballX = canvas.width / 2,
  ballY = canvas.height / 2;
let ballSpeedX = 5,
  ballSpeedY = 5;
const paddleSpeed = 8;
let scoreLeft = 0,
  scoreRight = 0;

const keys = {};

window.addEventListener("keydown", (e) => (keys[e.key] = true));
window.addEventListener("keyup", (e) => (keys[e.key] = false));

function updateGame() {
  if (keys["w"] && paddleLeftY > 0) paddleLeftY -= paddleSpeed;
  if (keys["s"] && paddleLeftY < canvas.height - paddleHeight)
    paddleLeftY += paddleSpeed;
  if (keys["ArrowUp"] && paddleRightY > 0) paddleRightY -= paddleSpeed;
  if (keys["ArrowDown"] && paddleRightY < canvas.height - paddleHeight)
    paddleRightY += paddleSpeed;

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY <= 0 || ballY >= canvas.height - ballSize) {
    ballSpeedY = -ballSpeedY;
  }

  if (
    ballX <= paddleWidth &&
    ballY > paddleLeftY &&
    ballY < paddleLeftY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }
  if (
    ballX >= canvas.width - paddleWidth - ballSize &&
    ballY > paddleRightY &&
    ballY < paddleRightY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  if (ballX < 0) {
    scoreRight++;
    resetBall();
  } else if (ballX > canvas.width) {
    scoreLeft++;
    resetBall();
  }

  drawGame();
}

function resetBall() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
}

function drawGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, paddleLeftY, paddleWidth, paddleHeight);
  ctx.fillRect(
    canvas.width - paddleWidth,
    paddleRightY,
    paddleWidth,
    paddleHeight
  );

  ctx.beginPath();
  ctx.arc(ballX, ballY, ballSize / 2, 0, Math.PI * 2);
  ctx.fill();

  ctx.font = "20px Arial";
  ctx.fillText(`Jogador Esquerdo: ${scoreLeft}`, 50, 30);
  ctx.fillText(`Jogador Direito: ${scoreRight}`, canvas.width - 200, 30);
}

function gameLoop() {
  updateGame();
  requestAnimationFrame(gameLoop);
}

gameLoop();
