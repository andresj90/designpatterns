import { Beverage } from "./Beverage";

export class Decaf extends Beverage{
    constructor() {
        super();
        this._description = "Decaf"
        this._cost = 1.05
    }

    public get cost(): number {
        return this._cost;
    }

}