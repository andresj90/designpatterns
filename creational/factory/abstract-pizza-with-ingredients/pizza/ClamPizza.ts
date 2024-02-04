import { PizzaIngredientFactory } from "../ingredient-factory/PizzaIngredientFactory"
import { Pizza } from "./Pizza"

export class ClamPizza extends Pizza {
    private ingredientFactory: PizzaIngredientFactory; 

    public constructor(ingredientFactory: PizzaIngredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory; 
    }

    public prepare(): void {
        this.sauce = this.ingredientFactory.createSauce(); //
        this.cheese = this.ingredientFactory.createCheese(); //
        this.clam = this.ingredientFactory.createClam(); //
      
    }

}