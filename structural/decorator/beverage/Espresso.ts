import { Beverage } from "./Beverage";

export class Espresso extends Beverage{
    constructor() {
        super();
        this._description = "Espresso"
        this._cost = 1.99
    }

    public get cost(): number {
        return this._cost;
    }

}