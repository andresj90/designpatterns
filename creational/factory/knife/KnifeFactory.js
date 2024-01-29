"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BudgetKnifeStore_1 = require("./BudgetKnifeStore");
//this s a factory object
class KnifeFactory {
    constructor() {
    }
    static createBudgetKnife(type) {
        let budgetKnifeCreator = new BudgetKnifeStore_1.BudgetKnifeStore();
        const concreteBudgetKnife = budgetKnifeCreator.createKnife(type);
        return concreteBudgetKnife;
    }
}
