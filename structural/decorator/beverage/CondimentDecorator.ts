import { Beverage } from "./Beverage";

export abstract class CondimentDecorator extends Beverage {
    public get description(): string {
        return this._description;
    }

    public abstract setPriceForSize(): number  
}