"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButcherBudgetKnife = void 0;
const BudgetKnifeStore_1 = require("./BudgetKnifeStore");
class ButcherBudgetKnife extends BudgetKnifeStore_1.BudgetKnifeStore {
    constructor() {
        super(...arguments);
        this._name = "Butcher Budget Knife";
    }
    get name() { return this._name; }
}
exports.ButcherBudgetKnife = ButcherBudgetKnife;
