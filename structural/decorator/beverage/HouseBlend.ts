import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage{
    constructor() {
        super();
        this._description = "House Blend"
        this._cost = .89
    }

    public get cost(): number {
        return this._cost;
    }

}