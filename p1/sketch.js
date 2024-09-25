let currentkey = '1'
let cat;
let meow;
let star;
let swirl;
let audrey;

function preload() {
  cat = loadImage("cat.png");
  meow = loadImage("meow.png");
  star = loadImage("star.png");
  swirl = loadImage("swirl.png");
  audrey = loadImage("audrey.png");
}

function setup() {
  createCanvas(700,500);
  background("#faf8f5");
  x=random(0, 650);
  y=random(0, 450);
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
      c = random(200, 255);
      tint(c, c, c, c);
      size = random(10, 100);
      image(cat, mouseX - (size/2), mouseY - (size/2), size, size)
      break;
    case '2':
      console.log("MEOW");
      c = random(100, 200);
      tint(c, c, c, c);
      size=random(30, 50);
      image(meow, mouseX - (size/2), mouseY - (size/2), size, size)
      break;
    case '3':
      console.log("STARRY");
      c = random(10, 100);
      tint(c, c, c, c);
      size=random(20, 75);
      image(star, mouseX - (size/2), mouseY - (size/2), size, size)
      break;
    case '4':
      console.log("SWIRL");
      c = random(75, 200);
      tint(c, c, c, c);
      size=random(50, 100);
      image(swirl, mouseX - (size/2), mouseY - (size/2), size, size)
      break;
    case '5':
      console.log("AUDREY");
      c = random(150, 250);
      tint(c, c, c, c);
      size=random(2, 80);
      image(audrey, mouseX - (size/2), mouseY - (size/2), size, size)
      break;
    case '6':
      console.log("ERASE");
      fill("#faf8f5");
      stroke("#faf8f5");
      size=random(5, 300);
      strokeWeight(size);
      point(mouseX, mouseY);
      break;
  }
}