import { Pizza } from "./Pizza";
import { PizzaFactory } from "./PizzaFactory";

export class Store {
    private pizzaFactory: PizzaFactory; 

    constructor(pizzaFactory: PizzaFactory) {
        this.pizzaFactory = pizzaFactory; 
    }

    public makePizza(type: string) : Pizza {
        const pizza = this.pizzaFactory.makePiza(type);
       // pizza.applyIngreddients();
        //pizza.bake();
        // pizza.box(); 
        return pizza;
    }
}