let size;
let currentkey = '1'
let cat;
let meow;
let star;
let swirl;
let doodle;

function preload() {
  cat = loadImage("cat.png");
  meow = loadImage("meow.png");
  star = loadImage("star.png");
  swirl = loadImage("swirl.png");
  doodle = loadImage("doodle.png");
  // frameRate(10);
}

function setup() {
  createCanvas(700,500);
  background("#faf8f5");
  gkcount = 15;
}

function draw() {
  if (mouseIsPressed) {
    drawChoice();
  }
}

function drawChoice() {
  let currentkey = key;

  switch(currentkey) {
    case '1':
      console.log("CAT");
      imageHelper(cat, mouseX-17, mouseY-17, 55, 55, 30, 30)
      break;
    case '2':
      console.log("MEOW");
      imageHelper(meow, mouseX-25, mouseY-25, 55, 55)
      break;
    case '3':
      console.log("STARRY");
      imageHelper(star, mouseX-25, mouseY-25, 55, 55)
      break;
    case '4':
      console.log("SWIRL");
      imageHelper(swirl, mouseX-25, mouseY-25, 55, 55)
      break;
    case '5':
      console.log("AUDREY");
      let size=random(10, 50);
      audrey(doodle, mouseX-25, mouseY-25, size, size);  
      break;
    case '6':
      console.log("ERASE");
      fill("#faf8f5");
      stroke("#faf8f5");
      strokeWeight(30);
      point(mouseX, mouseY);
      break;
  }
}

function imageHelper(file, mx, my, w, h) {
  image(file, mx, my, w, h);
}

function audrey(file, mx, my, w, h) {
  fill("#faf8f5");
  image(file, mx, my, w, h);
}
