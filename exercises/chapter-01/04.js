let walker;

function setup() {
  createCanvas(640, 240);

  background(255);
}

function draw() {
  // let x = randomGaussian(320, 60);
  let x = 60 * randomGaussian() + 320;

  noStroke();
  fill(0, 10);
  circle(x, 120, 16);
}
