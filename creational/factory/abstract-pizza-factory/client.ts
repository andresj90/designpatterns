import { ChicagoPizzaFactory } from "./ChicagoPizzaFactory";
import { NewYorkPizzaFactory } from "./NewYorkPizzaFactory";
import { Store } from "./Store";

const newYorkPizzaFactory = new NewYorkPizzaFactory(); 
const chicagoPizzaFactory = new ChicagoPizzaFactory();


const newYorkstore = new Store(newYorkPizzaFactory);
const chicagostore = new Store(chicagoPizzaFactory); 

const pizza1 = newYorkstore.makePizza("hawaiian"); 
const pizza2 = newYorkstore.makePizza("napolitan")


const pizza3 = chicagostore.makePizza("hawaiian"); 
const pizza4 = chicagostore.makePizza("napolitan")

console.log({
    pizza1,
    pizza2,
    pizza3,
    pizza4
})