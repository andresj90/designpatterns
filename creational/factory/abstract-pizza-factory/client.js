"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChicagoPizzaFactory_1 = require("./ChicagoPizzaFactory");
const NewYorkPizzaFactory_1 = require("./NewYorkPizzaFactory");
const Store_1 = require("./Store");
const newYorkPizzaFactory = new NewYorkPizzaFactory_1.NewYorkPizzaFactory();
const chicagoPizzaFactory = new ChicagoPizzaFactory_1.ChicagoPizzaFactory();
const newYorkstore = new Store_1.Store(newYorkPizzaFactory);
const chicagostore = new Store_1.Store(chicagoPizzaFactory);
const pizza1 = newYorkstore.makePizza("hawaiian");
const pizza2 = newYorkstore.makePizza("napolitan");
const pizza3 = chicagostore.makePizza("hawaiian");
const pizza4 = chicagostore.makePizza("napolitan");
console.log({
    pizza1,
    pizza2,
    pizza3,
    pizza4
});
