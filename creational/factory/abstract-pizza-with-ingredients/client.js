"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NewYorkStore_1 = require("./store-factory/NewYorkStore");
const ChicagoStore_1 = require("./store-factory/ChicagoStore");
const newYorkStore = new NewYorkStore_1.NewYorkPizzaStore();
const chicagoStore = new ChicagoStore_1.ChicagoPizzaStore();
const pepperoniNY = newYorkStore.orderPizza("pepperoni");
const pepperoniCH = chicagoStore.orderPizza("pepperoni");
const cheeseNY = newYorkStore.orderPizza("cheese");
const cheeseCH = chicagoStore.orderPizza("cheese");
const clamNY = newYorkStore.orderPizza("clam");
const clamCH = chicagoStore.orderPizza("clam");
const veggieNY = newYorkStore.orderPizza("veggie");
const veggieCH = chicagoStore.orderPizza("veggie");
console.log({
    pepperoniNY,
    pepperoniCH,
    cheeseNY,
    cheeseCH,
    clamNY,
    clamCH,
    veggieNY,
    veggieCH
});
