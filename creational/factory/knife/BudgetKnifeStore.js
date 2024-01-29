"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetKnifeStore = void 0;
const ButcherBudgetKnife_1 = require("./ButcherBudgetKnife");
const ChefBudgetKnife_1 = require("./ChefBudgetKnife");
const KnifeStore_1 = require("./KnifeStore");
class BudgetKnifeStore extends KnifeStore_1.KnifeStore {
    createKnife(type) {
        switch (type) {
            case "chef":
                return new ChefBudgetKnife_1.ChefBudgetKnife();
            case "butcher":
                return new ButcherBudgetKnife_1.ButcherBudgetKnife();
            default:
                return null;
        }
    }
}
exports.BudgetKnifeStore = BudgetKnifeStore;
