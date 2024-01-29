

import { Cheese } from "./Cheese";
import { Clam } from "./Clam";
import { Dough } from "./Dough";
import { Pepperoni } from "./Pepperoni";
import { Sauce } from "./Sauce";
import { Veggie } from "./Veggie";

/**
 * PizzaIngredientFactory is implemented as an
    Abstract Factory because we need to create
    families of products (the ingredients). Each
    subclass implements the ingredients using its own
    regional suppliers.
 */
export interface PizzaIngredientFactory {
    createDough: () => Dough;  // this are the different family of products.
    createSauce: () => Sauce; // abstract factories we code for composition, so here we are coding for intferfaces
    createCheese: () => Cheese; // the concrete products implement the particular product interface
    createVeggies: () => Array<Veggie>;  // the factories don't know about the concrete classes 
    createPepperoni: () => Pepperoni; // this is dependency inversion principle, where both top and bottom 
    createClam: () => Clam; // classes use abstractations rather than concrete classes
}


