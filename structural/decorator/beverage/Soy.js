"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoyDecorator = void 0;
const CondimentDecorator_1 = require("./CondimentDecorator");
class SoyDecorator extends CondimentDecorator_1.CondimentDecorator {
    constructor(beverage) {
        super();
        this._beverage = beverage;
    }
    get description() {
        return `${this._beverage.description}, soy`;
    }
    get cost() {
        return this._beverage.cost + this.setPriceForSize();
    }
    setPriceForSize() {
        switch (this._beverage.size) {
            case "TALL":
                return 0.10;
            case "GRANDE":
                return 0.15;
            case "VENTI":
                return 0.20;
            default:
                return 0;
        }
    }
}
exports.SoyDecorator = SoyDecorator;
