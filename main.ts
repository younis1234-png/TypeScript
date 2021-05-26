// Objects

// this Point is an class
class Point {
  x: number;
  y: number;

  draw() {
    console.log(`X: ${this.x}  Y: ${this.y} `);
  }

  getDistance(another: Point) {
    //..
  }
}

//this (point) is an object
let point = new Point();
point.x = 1;
point.y = 2;
point.draw();

// When defining an object of a custom type,
// we need to explicitly allocate memory to it (new Point())
// output : X: 1  Y: 2
