// Objects
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + "  Y: " + this.y + " ");
    };
    Point.prototype.getDistance = function (another) {
        //..
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
// When defining an object of a custom type,
// we need to explicitly allocate memory to it (new Point())
