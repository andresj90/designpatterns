import { Beverage } from "./Beverage";
import { CondimentDecorator } from "./CondimentDecorator";

export class SoyDecorator extends CondimentDecorator {
    private _beverage : Beverage; 
    constructor(beverage : Beverage) {
        super();
        this._beverage = beverage;
    }

    public get description(): string {
        return `${this._beverage.description}, soy`  
    }

    public get cost(): number {
        return this._beverage.cost + this.setPriceForSize();
    }

    public setPriceForSize(): number {
        switch (this._beverage.size) {
            case "TALL":
                
                return 0.10 ;
            case "GRANDE":
                return 0.15;
            
            case "VENTI":     
                return 0.20;

            default:
                return 0;
        }
    }
}