// Interfaces ( how we can use custom TYPES IN typescript)

//insted of passing x,y as a parameter we can pass a point object
let drawPoint = (point) => {
  //..
};

// is only expected x,y we can have anything else to fix this  we use Annotation
drawPoint({
  x: 1,
  y: 2,
});

// Annotation is to annotate the parameter
let drawPoint2 = (point2: { x: number; y: number }) => {
  //..
};
drawPoint2({
  x: 1,
  y: 2,
});

//
// A better approch is to use Interfaces
// 1) at the top define an interface (we use Pascal naming convantion)
// and set the type of that paramter to Point
interface Point {
  x: number;
  y: number;
}
let drawPoint3 = (point3: Point) => {
  //..
};
drawPoint3({
  x: 1,
  y: 2,
});
