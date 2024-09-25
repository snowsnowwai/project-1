let jade, jade2, ash, ash2, yum;
let x, y;
let grid;
let yumX, yumY;
let score = 0;
let showYum = true;
let currentImage;

function preload() {
  jade = loadImage("jade.png");
  jade2 = loadImage("jade2.png");
  ash = loadImage("ash.png");
  ash2 = loadImage("ash2.png");
  yum = loadImage("yum.png");
  font = loadFont('Tiny5/Tiny5-Regular.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  x = width / 4;
  y = height / 4;
  grid = 75;
  currentImage = jade;
  spawnYum();
  textFont(font);
  textSize(50);
}

function draw() {
  background(20);
  
  if (showYum) {
    t = random(50, 255);
    tint(t, t, t, t);
    image(yum, yumX, yumY, grid, grid);
  }

  noTint();
  image(currentImage, x, y, grid, grid);

  if (keyIsPressed) {
    drawChoice();
  } 

  checkTouch();

  fill(125, 99, 121);
  text(`Score: ${score}`, 50, 100);
}
  
function drawChoice() {
  let currentKey = key;

  switch(currentKey) {
    case 'w':
      console.log("up");
      y = max(0, y - grid);
      currentImage = jade;
      break;
    case 'a':
      console.log("left");
      x = max(0, x - grid);
      currentImage = ash;
      break;
    case 's':
      console.log("down");
      y = min(height - grid, y + grid);
      currentImage = jade2;
      break;
    case 'd':
      console.log("right");
      x = min(width - grid, x + grid);
      currentImage = ash2;
      break;
  }
  key = '';
}

function spawnYum() {
  yumX = floor(random(width / grid)) * grid;
  yumY = floor(random(height / grid)) * grid;
  showYum = true;
}

function checkTouch() {
  if (showYum && dist(x, y, yumX, yumY) < grid / 2) {
    console.log("Yum!");
    showYum = false;
    score++;

    fill(255, 255, 0);
    fill(125, 99, 121);
    textFont(font);
    textSize(50);
    text("YUM!", width / 2 - 50, height / 2 - 50);

    setTimeout(spawnYum, 1000);
  }
}