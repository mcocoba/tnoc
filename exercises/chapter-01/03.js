let walker;

function setup() {
  createCanvas(640, 240);
  walker = new Walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0);
    strokeWeight(2);
    point(this.x, this.y);
  }

  step() {
    let r = random(1);

    if (r < 0.4) {
      if (r < 0.25) {
        if (this.x < mouseX) {
          this.x++;
        } else {
          this.x--;
        }
      } else {
        if (this.y < mouseY) {
          this.y++;
        } else {
          this.y--;
        }
      }
    } else if (r < 0.6) {
      this.x--;
    } else if (r < 0.8) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
