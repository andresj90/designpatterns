import { CheesePizza } from "./CheesePizza";
import { HawaianPizza } from "./HawaianPizza";
import { IPizza } from "./IPizza";
import { NapolitanPizza } from "./NapolitanPizza";

export class PizzaFactory {
    
    constructor() {

    }

    public createPizza(type: string): IPizza {
        switch (type) {
            case "hawaian":
                return new HawaianPizza(); 
            case "cheese":     
                return new CheesePizza();
            case "napolitan":
                return new NapolitanPizza();    
            default:
                return new HawaianPizza();
        }
    }
}