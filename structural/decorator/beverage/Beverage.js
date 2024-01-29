"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beverage = void 0;
class Beverage {
    constructor() {
        this._description = "Unknown Beverage";
        this._cost = 0;
        this._size = "GRANDE";
    }
    get description() { return this._description; }
    get cost() { return this._cost; }
    set setSize(size) { this._size = size; }
    get size() { return this._size; }
}
exports.Beverage = Beverage;
