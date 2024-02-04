"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChicagoPizzaStore = void 0;
const CheesePizza_1 = require("../pizza/CheesePizza");
const StoreFactory_1 = require("./StoreFactory");
const VeggiePizza_1 = require("../pizza/VeggiePizza");
const PepperoniPizza_1 = require("../pizza/PepperoniPizza");
const ClamPizza_1 = require("../pizza/ClamPizza");
const ChicagoPizzaIngredientFactory_1 = require("../ingredient-factory/ChicagoPizzaIngredientFactory");
/**
 * This is a concrete factory
 * which is is extending the abstract factory class
 *
 *
 */
class ChicagoPizzaStore extends StoreFactory_1.PizzaStoreFactory {
    makePizza(type) {
        const ingredientFactory = new ChicagoPizzaIngredientFactory_1.ChicagoPizzaIngridientFactory();
        switch (type) {
            case 'cheese':
                return new CheesePizza_1.CheesePizza(ingredientFactory);
            case 'veggie':
                return new VeggiePizza_1.VeggiePizza(ingredientFactory);
            case 'pepperoni':
                return new PepperoniPizza_1.PepperoniPizza(ingredientFactory);
            case 'clam':
                return new ClamPizza_1.ClamPizza(ingredientFactory);
            default:
                throw new Error("incorrect pizza type");
                ;
        }
    }
}
exports.ChicagoPizzaStore = ChicagoPizzaStore;
