function setup() {
    createCanvas(450, 450);
    background("white");
  }
  
  function draw() {
    
    stroke("blue");
    fill("red");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20,35);
    }
  }