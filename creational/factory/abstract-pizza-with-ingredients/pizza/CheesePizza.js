"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheesePizza = void 0;
const Pizza_1 = require("./Pizza");
/**
 *
 * This are the core product of my business which is a pizzeria, which
 * here we are implementing a concrete pizza (product) and this pizza is prepared
 * differently depending on the region, so that is why we have a reference to
 * a PizzaIngredientFactory which could be any of the concrete Factory classes
 * implementing the PizzaIngredientFactory , so here we are addhering to
 *
 * The Dependency inversion principle because our lower components are working with
 * abstractions rather than concretion. we are coding for composition.
 */
class CheesePizza extends Pizza_1.Pizza {
    constructor(ingredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }
    prepare() {
        this.sauce = this.ingredientFactory.createSauce();
        this.dough = this.ingredientFactory.createDough();
        this.clam = this.ingredientFactory.createClam();
    }
}
exports.CheesePizza = CheesePizza;
