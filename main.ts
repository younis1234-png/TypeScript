//Access Modifier

// this Point is an class
class Point {
  private x: number;
  private y: number;
  // adding ? to make it optional
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  // method
  draw() {
    console.log(`X: ${this.x}  Y: ${this.y} `);
  }
}

//this (point) is an object
let point = new Point(1, 2);
// We can change the x and y values
// by doing point.x =3 or....
// but how can we avoid that??
// Access Modifier: we can apply this to a MEMBER OF A CLASS TO CONTROL IT ACCESSIBILITY
// Access modifier is either = default is Public , Private, Protected
// Adding private to x you can see it when you do (point.x)
point.draw();
