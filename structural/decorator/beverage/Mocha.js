"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MochaDecorator = void 0;
const CondimentDecorator_1 = require("./CondimentDecorator");
class MochaDecorator extends CondimentDecorator_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this._beverage = beverage;
    }
    get description() {
        return `${this._beverage.description}, mocha`;
    }
    get cost() {
        return this._beverage.cost + 0.20;
    }
}
exports.MochaDecorator = MochaDecorator;
