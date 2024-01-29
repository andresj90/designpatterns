"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChicagoPizzaFactory = void 0;
const PizzaFactory_1 = require("./PizzaFactory");
const ChicagoHawaiianPizza_1 = require("./ChicagoHawaiianPizza");
const ChicagoNapolitanPizza_1 = require("./ChicagoNapolitanPizza");
class ChicagoPizzaFactory extends PizzaFactory_1.PizzaFactory {
    makePiza(type) {
        switch (type) {
            case "hawaiian":
                return new ChicagoHawaiianPizza_1.ChicagoHawaiianPizza();
            case "napolitan":
                return new ChicagoNapolitanPizza_1.ChicagoNapolitanPizza();
            default:
                throw new Error("Method not implemented.");
                ;
        }
    }
}
exports.ChicagoPizzaFactory = ChicagoPizzaFactory;
