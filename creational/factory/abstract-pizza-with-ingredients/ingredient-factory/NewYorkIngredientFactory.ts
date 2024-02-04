import { Cheese } from "../ingredients/Cheese";
import { Clam } from "../ingredients/Clam";
import { Dough } from "../ingredients/Dough";
import { FreshClam } from "../ingredients/FreshClam";
import { MarinaraSauce } from "../ingredients/MarinaraSauce";
import { Mushroom } from "../ingredients/Mushroom";
import { Pepperoni } from "../ingredients/Pepperoni";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { RedPepper } from "../ingredients/RedPeppers";
import { ReggianoCheese } from "../ingredients/ReggianoCheese";
import { Sauce } from "../ingredients/Sauce";
import { SlicePepperoni } from "../ingredients/SlicePepperoni";
import { ThinCrustDough } from "../ingredients/ThinCrustDough";
import { Veggie } from "../ingredients/Veggie";

/**
 * For each ingredient in the
ingredient family, we create
the New York version.
 */
export class NewYorkPizzaIngridientFactory implements PizzaIngredientFactory {
    createDough = () =>  new ThinCrustDough(); 
    createSauce = () => new MarinaraSauce();
    createCheese = () =>  new ReggianoCheese();
    createVeggies =  () => [new Mushroom(), new RedPepper()];
    createPepperoni = () => new SlicePepperoni();
    createClam= () => new FreshClam();
}