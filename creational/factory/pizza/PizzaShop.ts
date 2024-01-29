import { IPizza } from "./IPizza";
import { PizzaFactory } from "./PizzaFactory";

export class PizzaShop {
    private _pizza : PizzaFactory

    constructor(pizza : PizzaFactory) {
        this._pizza = pizza;
    }

    public orderPizza(type:string):IPizza {
        let pizza:IPizza; 
        pizza = this._pizza.createPizza(type);
        pizza.applyIngreddients(); //
        pizza.bake(); //
        pizza.box();
        return pizza;
    }
}