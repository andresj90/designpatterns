import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class WhipDecorator extends CondimentDecorator {
    private _beverage : Beverage; 
    constructor(beverage : Beverage) {
        super();
        this._beverage = beverage;
    }

    public get description(): string {
        return `${this._beverage.description}, whip milk`  
    }

    public get cost(): number {
        return this._beverage.cost + 0.10
    }
}