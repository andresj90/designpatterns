import {Circle, Rectangle, Square} from "./prototype"

const baseCircle = new Circle(5); 
const baseSquare = new Square(10); 
const baseRectangle = new Rectangle(10, 30); 

const cloneCircle = baseCircle.clone();
const cloneSquare = baseSquare.clone();
const cloneRectangle = baseRectangle.clone();

console.log({cloneCircle, cloneSquare, cloneRectangle});

console.log("same square ", baseSquare  === cloneSquare);
console.log("same rectangle ", baseRectangle === cloneRectangle)
console.log("same circle ", baseCircle === cloneCircle);