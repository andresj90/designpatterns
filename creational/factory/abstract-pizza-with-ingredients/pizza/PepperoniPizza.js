"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniPizza = void 0;
const Pizza_1 = require("./Pizza");
class PepperoniPizza extends Pizza_1.Pizza {
    constructor(ingredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }
    prepare() {
        this.sauce = this.ingredientFactory.createSauce(); //
        this.veggies = this.ingredientFactory.createVeggies();
        this.cheese = this.ingredientFactory.createCheese(); //
        this.pepperoni = this.ingredientFactory.createPepperoni();
    }
}
exports.PepperoniPizza = PepperoniPizza;
