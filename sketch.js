var a = 50;
var b = 80;
var c;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  colorMode(HSB,360,100,100);
  //background(0,100,100);
  fill(random(0,200),10,100);
  noStroke();
  c = a * random(1,5);
  ellipse(mouseX,mouseY,c,c);
}
