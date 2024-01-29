"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Espresso = void 0;
const Beverage_1 = require("./Beverage");
class Espresso extends Beverage_1.Beverage {
    constructor() {
        super();
        this._description = "Espresso";
        this._cost = 1.99;
    }
    get cost() {
        return this._cost;
    }
}
exports.Espresso = Espresso;
