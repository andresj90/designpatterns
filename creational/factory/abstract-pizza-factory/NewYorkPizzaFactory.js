"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewYorkPizzaFactory = void 0;
const PizzaFactory_1 = require("./PizzaFactory");
const NewYorkHawaiianPizza_1 = require("./NewYorkHawaiianPizza");
const NewYorkNapolitanPizza_1 = require("./NewYorkNapolitanPizza");
class NewYorkPizzaFactory extends PizzaFactory_1.PizzaFactory {
    makePiza(type) {
        switch (type) {
            case "hawaiian":
                return new NewYorkHawaiianPizza_1.NewYorkHawaiianPizza();
            case "napolitan":
                return new NewYorkNapolitanPizza_1.NewYorkNapolitanPizza();
            default:
                throw new Error("Method not implemented.");
                ;
        }
    }
}
exports.NewYorkPizzaFactory = NewYorkPizzaFactory;
