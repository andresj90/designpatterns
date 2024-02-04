import { NewYorkPizzaStore } from "./store-factory/NewYorkStore";
import { ChicagoPizzaStore } from "./store-factory/ChicagoStore"; 

const newYorkStore = new NewYorkPizzaStore();
const chicagoStore = new ChicagoPizzaStore();

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
})