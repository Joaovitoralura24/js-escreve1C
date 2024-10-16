let cor;

function setup() {
  
  createCanvas(400, 400);
  cor = color(random(0,255), random(0,255), random(0,255),random (0,100));
  background("blue") 

  
}
function draw() {
  fill(cor)
  circle(200 ,200 ,100)
}
