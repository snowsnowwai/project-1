let jade;
let ash;
let isKeyPressed = false;

function preload() {
  jade = loadImage("jade.jpg");
  ash = loadImage("ash.jpg");
}

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
}

function draw() {
  if (!mouseIsPressed) {
    noTint();
    image(jade, 0, 0, width/2, height/2);
    image(ash, width/2, height/2, width/2, height/2);
  } 
  if (mouseIsPressed) {
    noTint();
    image(ash, 0, height/2, width/2, height/2);
    image(jade, 250, 0, width/2, height/2);
  }

  noTint();
  rect(mouseX, mouseY, 100, 100);

  if(keyIsPressed) {
    keyPressed();
  }
}

function mouseMoved() {
  if (mouseX < width / 2) {
    let size=random(10, 50);
    image(jade, 100, 100, size, size);
  }
  else {
    let size=random(10, 50);
    image(ash, 100, 100, size, size);
  }
}

function mousePressed () {
  fill(125, 99, 121);
  ellipse(mouseX, mouseY, 50, 50);
}

function keyPressed() {
  if (key === 'w' || 'W') {
    fill(100, 100, 155);
    rect (width/2, height/2, 150, 150);
    textSize(50);
    text('Well done!', 200, 200);
  } else {
    fill(195, 187, 194);
    textSize(50);
    text('A for effort!', 150, 100);
  }
  key='';
}

function keyReleased() {
  isKeyPressed = false;
}

function mouseReleased() {
  mouseIsPressed = false;
}