import { PizzaIngredientFactory } from "../ingredient-factory/PizzaIngredientFactory"
import { Pizza } from "./Pizza"

export class PepperoniPizza extends Pizza {
    private ingredientFactory: PizzaIngredientFactory; 

    public constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory; 
    }

    public prepare(): void {
        this.sauce = this.ingredientFactory.createSauce(); //
        this.veggies = this.ingredientFactory.createVeggies();
        this.cheese = this.ingredientFactory.createCheese(); //
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }

}