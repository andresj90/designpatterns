

interface Shape {
    clone(): Shape;
}

export class Circle implements Shape {
    private radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }

    clone() {
        return new Circle(this.radius); 
    };
}

export class Square implements Shape {
    private width: number;

    constructor(width: number) {
       this.width = width;
    }

    clone() {
        return new Square(this.width); 
    };
}

export class Rectangle implements Shape {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
            this.height = height;
            this.width = width;
    }
    
    clone() {
        return new Rectangle(this.width, this.height); 
    };
}