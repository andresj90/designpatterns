"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decaf = void 0;
const Beverage_1 = require("./Beverage");
class Decaf extends Beverage_1.Beverage {
    constructor() {
        super();
        this._description = "Decaf";
        this._cost = 1.05;
    }
    get cost() {
        return this._cost;
    }
}
exports.Decaf = Decaf;
