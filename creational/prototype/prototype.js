"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Square = exports.Circle = void 0;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    clone() {
        return new Circle(this.radius);
    }
    ;
}
exports.Circle = Circle;
class Square {
    constructor(width) {
        this.width = width;
    }
    clone() {
        return new Square(this.width);
    }
    ;
}
exports.Square = Square;
class Rectangle {
    constructor(width, height) {
        this.height = height;
        this.width = width;
    }
    clone() {
        return new Rectangle(this.width, this.height);
    }
    ;
}
exports.Rectangle = Rectangle;
