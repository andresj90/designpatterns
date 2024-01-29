import { BudgetKnifeStore } from "./BudgetKnifeStore";

export class ButcherBudgetKnife extends BudgetKnifeStore {
    private _name: string = "Butcher Budget Knife";

    public get name(): string { return this._name; }
}