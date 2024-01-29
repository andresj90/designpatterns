import { PizzaFactory } from "./PizzaFactory";
import { Pizza } from "./Pizza";
import { NewYorkHawaiianPizza } from "./NewYorkHawaiianPizza";
import { NewYorkNapolitanPizza } from "./NewYorkNapolitanPizza";

export class NewYorkPizzaFactory extends PizzaFactory {
    makePiza(type: string): Pizza {
        switch (type) {
            case "hawaiian":
                return new NewYorkHawaiianPizza();
            case "napolitan":
                return new NewYorkNapolitanPizza();
        
            default:
                throw new Error("Method not implemented.");;
        }
    }

}