//Properties

// this Point is an class
class Point {
  constructor(private _x?: number, private _y?: number) {}

  // method
  draw() {
    console.log(`X: ${this.x}  Y: ${this.y} `);
  }

  // we can get access to X from Outside but we have access of it here
  // This allow us to get access to the properties outside this bloc

  // GETTER METHOD
  get x() {
    return this.x;
  }

  // get a new value of X (SETTER METHOD)
  set x(value) {
    if (value < 0) {
      throw new Error(" Value can't not be less than 0");
    }
    // otherwise x = value
    this.x = value;
  }
}

//this (point) is an object
let point = new Point(1, 2);
let X = point.x;
point.x = 10;
point.draw();
