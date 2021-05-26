//Access Modifier || Constructor  Parameters Clean 

// this Point is an class
class Point {

  constructor(private x?: number, private y?: number) {}

  // method
  draw() {
    console.log(`X: ${this.x}  Y: ${this.y} `);
  }
}

//this (point) is an object
let point = new Point(1, 2);
point.draw();
