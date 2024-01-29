"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CondimentDecorator = void 0;
const Beverage_1 = require("./Beverage");
class CondimentDecorator extends Beverage_1.Beverage {
    get description() {
        return this._description;
    }
}
exports.CondimentDecorator = CondimentDecorator;
