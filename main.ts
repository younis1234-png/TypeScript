//Constructor

// this Point is an class
class Point {
  x: number;
  y: number;
  // adding ? to make it optional 
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`X: ${this.x}  Y: ${this.y} `);
  }
}

//this (point) is an object
let point = new Point(1, 2);
point.draw();

//
