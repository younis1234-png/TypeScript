var count = 5;
count = "a";
// any variable, using type annotations
var a; // we set that type of variable to number
a = 1;
// a = true;
// a = "a";
// our different tupe
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "a"];
//Our type ENUM, working with related constants
var ColorRed = 0;
var ColorGreen = 2;
var ColorBlue = 2;
// our we can use ENUM FOR MORE CLEANER
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
// we done need to say = 1 or =2 is automatically assigned
var backgroundColor = Color.Red;
