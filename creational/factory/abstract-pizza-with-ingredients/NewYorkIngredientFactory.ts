import { Cheese } from "./Cheese";
import { Clam } from "./Clam";
import { Dough } from "./Dough";
import { FreshClam } from "./FreshClam";
import { MarinaraSauce } from "./MarinaraSauce";
import { Mushroom } from "./Mushroom";
import { Pepperoni } from "./Pepperoni";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { RedPepper } from "./RedPeppers";
import { ReggianoCheese } from "./ReggianoCheese";
import { Sauce } from "./Sauce";
import { SlicePepperoni } from "./SlicePepperoni";
import { ThinCrustDough } from "./ThinCrustDough";
import { Veggie } from "./Veggie";

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