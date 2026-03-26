const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// WORLD
const world = new World(100, 100, 20);

// PLAYER
const player = {
  x: 50,
  y: 50,
  speed: 3
};

// KEY INPUT
const keys = {};

window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);

// VILLAGE (simple spawn area)
const village = {
  x: 50,
  y: 50,
  size: 10
};

function update() {
  if (keys["w"]) player.y -= player.speed;
  if (keys["s"]) player.y += player.speed;
  if (keys["a"]) player.x -= player.speed;
  if (keys["d"]) player.x += player.speed;
}

function drawVillage() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(
    village.x * 20 - 100,
    village.y * 20 - 100,
    village.size * 20,
    village.size * 20
  );

  ctx.fillStyle = "black";
  ctx.fillText("VILLAGE (SAFE ZONE)", village.x * 20, village.y * 20);
}

function drawPlayer() {
  ctx.fillStyle = "red";
  ctx.fillRect(
    player.x * 20,
    player.y * 20,
    10,
    10
  );
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  world.draw(ctx, player.x * 20 - canvas.width / 2, player.y * 20 - canvas.height / 2);

  drawVillage();
  drawPlayer();

  update();

  requestAnimationFrame(loop);
}

loop();
