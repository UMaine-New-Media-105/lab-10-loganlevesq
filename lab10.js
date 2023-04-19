let cars = [];

let carlengths = [50];
let carcolor = ["purple"];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x = 0;
    let y = random(70, 150);
    cars.push(new Car(x, y, carlengths));
  }
}

function draw() {
  background(50);


  fill("grey");
  rect(0, 70, 400, 130);
  fill("blue");
  rect(0, 250, 400, 100);

  for (let i = 0; i < cars.length; i++) {
    cars[i].move();
    cars[i].show();
  }
  
  
}
class Car {
  constructor(x, y, carlengths) {
    this.x = x;
    this.y = y;
    this.carlengths = carlengths;
    this.c = random(carcolor);
    this.xSpeed = random(-5, 5);
    this.lane = [];
  }

  move() {
    this.x += this.xSpeed;

    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  show() {
    push();
    translate(this.x, this.y);
    fill(random(this.c));
    rect(0, 0, random(this.carlengths), 50);
    pop();
  }
}

// class frog {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speed = 50
//     this.size = 50
    
    
//   }

//   move() {
//     this.x += this.xSpeed;

//     if (this.x < 0 || this.x > width) {
//       this.xSpeed *= -1;
//     }
//     if (this.y < 0 || this.y > height) {
//       this.ySpeed *= -1;
//     }
//   }

//   show() {
//     push();
//     translate(this.x, this.y);
//     fill("green");
//     rect(0, 0, 50);
//     pop();
//   }
// }
