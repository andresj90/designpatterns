"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SteamedMilkDecorator = void 0;
const CondimentDecorator_1 = require("./CondimentDecorator");
class SteamedMilkDecorator extends CondimentDecorator_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this._beverage = beverage;
    }
    get description() {
        return `${this._beverage.description}, steamed milk`;
    }
    get cost() {
        return this._beverage.cost + 0.10;
    }
}
exports.SteamedMilkDecorator = SteamedMilkDecorator;
