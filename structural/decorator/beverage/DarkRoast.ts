import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage{
    constructor() {
        super();
        this._description = "DarkRoast"
        this._cost = .99
    }

    public get cost(): number {
        return this._cost;
    }

}