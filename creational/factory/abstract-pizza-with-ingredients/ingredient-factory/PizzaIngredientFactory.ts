

import { Cheese } from "../ingredients/Cheese";
import { Clam } from "../ingredients/Clam";
import { Dough } from "../ingredients/Dough";
import { Pepperoni } from "../ingredients/Pepperoni";
import { Sauce } from "../ingredients/Sauce";
import { Veggie } from "../ingredients/Veggie";

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


