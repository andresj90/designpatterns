"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhipDecorator = void 0;
const CondimentDecorator_1 = require("./CondimentDecorator");
class WhipDecorator extends CondimentDecorator_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this._beverage = beverage;
    }
    get description() {
        return `${this._beverage.description}, whip milk`;
    }
    get cost() {
        return this._beverage.cost + 0.10;
    }
}
exports.WhipDecorator = WhipDecorator;
