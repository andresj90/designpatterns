"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaShop = void 0;
class PizzaShop {
    constructor(pizza) {
        this._pizza = pizza;
    }
    orderPizza(type) {
        let pizza;
        pizza = this._pizza.createPizza(type);
        pizza.applyIngreddients(); //
        pizza.bake(); //
        pizza.box();
        return pizza;
    }
}
exports.PizzaShop = PizzaShop;
