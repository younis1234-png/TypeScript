let count = 5;
count = "a";

// any variable, using type annotations
let a: number; // we set that type of variable to number
a = 1;
// a = true;
// a = "a";

// our different tupe
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "a"];

//Our type ENUM, working with related constants
const ColorRed = 0;
const ColorGreen = 2;
const ColorBlue = 2;

// our we can use ENUM FOR MORE CLEANER
enum Color {
  Red = 1,
  Green = 2,
  Blue = 3,
}
// we done need to say = 1 or =2 is automatically assigned

let backgroundColor = Color.Red;
