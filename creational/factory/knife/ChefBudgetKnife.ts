import { BudgetKnifeStore } from "./BudgetKnifeStore";

export class ChefBudgetKnife extends BudgetKnifeStore {
    private _name: string = "Chef Budget Knife";

    public get name(): string { return this._name; }
}