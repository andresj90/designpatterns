"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClamPizza = void 0;
const Pizza_1 = require("./Pizza");
class ClamPizza extends Pizza_1.Pizza {
    constructor(ingredientFactory) {
        super();
        this.ingredientFactory = ingredientFactory;
    }
    prepare() {
        this.sauce = this.ingredientFactory.createSauce(); //
        this.cheese = this.ingredientFactory.createCheese(); //
        this.clam = this.ingredientFactory.createClam(); //
    }
}
exports.ClamPizza = ClamPizza;
