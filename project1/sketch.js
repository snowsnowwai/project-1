function setup() {
  createCanvas(400, 400);
  background(151, 145, 131);
  noStroke();
}

function draw() {
  let y1 = mouseY;
  noStroke();
  if (mouseX < 150)  { 
    for (let i = 0; i < mouseX; i += 20) {
      let r1 = random(1, 255);
      let s1 = random(1,25);
      fill(r1, r1-100, r1-100);
      ellipse(i+20, y1, s1, s1);
      console.log("r1 = " + r1);
     }
  }

  if(mouseX > 150 && mouseX < 250)  {
    for (let i = 0; i < mouseX; i += 20) {
      let r2 = random(1, 255);
      let s2 = random(5,15);
      fill(r2, r2-70, r2+50);
      triangle(mouseX, y1, mouseX-s2, mouseY-s2, mouseX, mouseY+s2);
      console.log("r2 = " + r2);
    }
    
     if(mouseY > 250)  { 
      for (let i = 0; i < mouseX; i += 2) {
        let r5 = random(1, 255);
        let s5 = random(10, 20);
        fill(r5+i, r5, r5+20);
        rect(i+0, y1, s5, s5);
        console.log("r5 = " + r5);
       }
    }
  }
  
  else  {
    let mx = mouseX;
    for (let i = 0; i < mouseX; i += 20) {
      let r3 = random(1,255);
      let s3 = random(1, 25);
      fill(r3); 
      stroke(r3);
      strokeWeight(s3);
      point(mouseX, y1);
      console.log("r3 = " + r3);
    }

    for (let i = 0; i < mouseX; i += 20) {
      let r4 = random(1, 100);
      let s4 = random(1,15);
      stroke(r4, 20-r4, r4+50);
      strokeWeight(5);
      line(mouseX, y1, mouseX-20, y1-20);
      console.log("r4 = " + r4);
    }
  }
}