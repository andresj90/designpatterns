import { PizzaFactory } from "./PizzaFactory";
import { PizzaShop } from "./PizzaShop";


const pizzaFactory = new PizzaFactory();
const pizzaShop = new PizzaShop(pizzaFactory);

const pizza1 = pizzaShop.orderPizza("hawaian"); 
const pizza2 = pizzaShop.orderPizza("napolitan");
const pizza3 = pizzaShop.orderPizza("cheese"); 

console.log({pizza1, pizza2, pizza3});
