import { PizzaFactory } from "./PizzaFactory";
import { Pizza } from "./Pizza";
import { ChicagoHawaiianPizza } from "./ChicagoHawaiianPizza";
import { ChicagoNapolitanPizza } from "./ChicagoNapolitanPizza";

export class ChicagoPizzaFactory extends PizzaFactory {
    makePiza(type: string): Pizza {
        switch (type) {
            case "hawaiian":
                return new ChicagoHawaiianPizza();
            case "napolitan":
                return new ChicagoNapolitanPizza();
        
            default:
                throw new Error("Method not implemented.");;
        }
    }

}