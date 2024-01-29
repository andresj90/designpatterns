"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaFactory = void 0;
const CheesePizza_1 = require("./CheesePizza");
const HawaianPizza_1 = require("./HawaianPizza");
const NapolitanPizza_1 = require("./NapolitanPizza");
class PizzaFactory {
    constructor() {
    }
    createPizza(type) {
        switch (type) {
            case "hawaian":
                return new HawaianPizza_1.HawaianPizza();
            case "cheese":
                return new CheesePizza_1.CheesePizza();
            case "napolitan":
                return new NapolitanPizza_1.NapolitanPizza();
            default:
                return new HawaianPizza_1.HawaianPizza();
        }
    }
}
exports.PizzaFactory = PizzaFactory;
