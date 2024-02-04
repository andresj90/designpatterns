"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaStoreFactory = void 0;
class PizzaStoreFactory {
    orderPizza(type) {
        const pizza = this.makePizza(type);
        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();
        return pizza;
    }
}
exports.PizzaStoreFactory = PizzaStoreFactory;
