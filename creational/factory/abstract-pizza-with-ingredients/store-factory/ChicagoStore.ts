import { Pizza } from "../pizza/Pizza";
import {CheesePizza} from "../pizza/CheesePizza"
import { PizzaStoreFactory } from "./StoreFactory";
import {NewYorkPizzaIngridientFactory} from "../ingredient-factory/NewYorkIngredientFactory"
import { VeggiePizza } from "../pizza/VeggiePizza";
import { PepperoniPizza } from "../pizza/PepperoniPizza";
import { ClamPizza } from "../pizza/ClamPizza";
import { ChicagoPizzaIngridientFactory } from "../ingredient-factory/ChicagoPizzaIngredientFactory";


/**
 * This is a concrete factory 
 * which is is extending the abstract factory class 
 * 
 * 
 */
export class ChicagoPizzaStore extends PizzaStoreFactory {
    makePizza(type: string): Pizza {
        const ingredientFactory = new ChicagoPizzaIngridientFactory();
        switch (type) {
            case 'cheese':
                return new CheesePizza(ingredientFactory);
            case 'veggie':
                return new VeggiePizza(ingredientFactory);    
            case 'pepperoni':
                return new PepperoniPizza(ingredientFactory);   
            case 'clam':
                return new ClamPizza(ingredientFactory);     
        
            default:
                throw new Error("incorrect pizza type");
                ;
        }
    }

}