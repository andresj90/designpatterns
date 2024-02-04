import {Pizza} from "../pizza/Pizza";

export abstract class PizzaStoreFactory {
    protected abstract makePizza(type: string): Pizza;
    public orderPizza(type: string):Pizza {
        const pizza = this.makePizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut(); 
        pizza.box();
        return pizza;
    }   
}

