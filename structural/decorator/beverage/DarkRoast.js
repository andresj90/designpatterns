"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarkRoast = void 0;
const Beverage_1 = require("./Beverage");
class DarkRoast extends Beverage_1.Beverage {
    constructor() {
        super();
        this._description = "DarkRoast";
        this._cost = .99;
    }
    get cost() {
        return this._cost;
    }
}
exports.DarkRoast = DarkRoast;
