//Properties
// this Point is an class
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    // method
    Point.prototype.draw = function () {
        console.log("X: " + this.x + "  Y: " + this.y + " ");
    };
    Object.defineProperty(Point.prototype, "x", {
        // we can get access to X from Outside but we have access of it here
        // This allow us to get access to the properties outside this bloc
        // GETTER METHOD
        get: function () {
            return this.x;
        },
        // get a new value of X (SETTER METHOD)
        set: function (value) {
            if (value < 0) {
                throw new Error(" Value can't not be less than 0");
            }
            // otherwise x = value
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
//this (point) is an object
var point = new Point(1, 2);
var X = point.x;
point.x = 10;
point.draw();
