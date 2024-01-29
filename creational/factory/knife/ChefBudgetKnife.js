"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefBudgetKnife = void 0;
const BudgetKnifeStore_1 = require("./BudgetKnifeStore");
class ChefBudgetKnife extends BudgetKnifeStore_1.BudgetKnifeStore {
    constructor() {
        super(...arguments);
        this._name = "Chef Budget Knife";
    }
    get name() { return this._name; }
}
exports.ChefBudgetKnife = ChefBudgetKnife;
