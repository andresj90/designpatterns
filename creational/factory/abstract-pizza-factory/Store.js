"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
class Store {
    constructor(pizzaFactory) {
        this.pizzaFactory = pizzaFactory;
    }
    makePizza(type) {
        const pizza = this.pizzaFactory.makePiza(type);
        // pizza.applyIngreddients();
        //pizza.bake();
        // pizza.box(); 
        return pizza;
    }
}
exports.Store = Store;
