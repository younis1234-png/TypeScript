//Access Modifier
// this Point is an class
var Point = /** @class */ (function () {
    // adding ? to make it optional
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // method
    Point.prototype.draw = function () {
        console.log("X: " + this.x + "  Y: " + this.y + " ");
    };
    return Point;
}());
//this (point) is an object
var point = new Point(1, 2);
// We can change the x and y values
// by doing point.x =3 or....
// but how can we avoid that??
// Access Modifier: we can apply this to a MEMBER OF A CLASS TO CONTROL IT ACCESSIBILITY
// Access modifier is either = default is Public , Private, Protected
// Adding private to x you can see it when you do (point.x)
point.draw();
