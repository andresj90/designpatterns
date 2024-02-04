"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeggiePizza = void 0;
const Pizza_1 = require("./Pizza");
class VeggiePizza extends Pizza_1.Pizza {
    constructor(ingredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }
    prepare() {
        this.sauce = this.ingredientFactory.createSauce(); //
        this.veggies = this.ingredientFactory.createVeggies(); //
        this.dough = this.ingredientFactory.createDough(); //
        this.clam = this.ingredientFactory.createClam();
    }
}
exports.VeggiePizza = VeggiePizza;
