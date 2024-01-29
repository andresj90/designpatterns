"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HouseBlend = void 0;
const Beverage_1 = require("./Beverage");
class HouseBlend extends Beverage_1.Beverage {
    constructor() {
        super();
        this._description = "House Blend";
        this._cost = .89;
    }
    get cost() {
        return this._cost;
    }
}
exports.HouseBlend = HouseBlend;
