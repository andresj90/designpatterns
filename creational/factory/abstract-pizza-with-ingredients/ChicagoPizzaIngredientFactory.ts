import { BlackOlive } from "./BlackOlive";
import { FrozenClam } from "./FrozenClam";
import { MozzarellaCheese } from "./MozzarellaCheese";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { PlumTomatoSauce } from "./PlumTomatoSauce";
import { SlicePepperoni } from "./SlicePepperoni";
import { Spinach } from "./Spinach";
import { ThickCrustDough } from "./ThickCrustDough";

export class ChicagoPizzaIngridientFactory implements PizzaIngredientFactory {
    createDough = () =>  new ThickCrustDough(); 
    createSauce = () => new PlumTomatoSauce();
    createCheese = () =>  new MozzarellaCheese();
    createVeggies =  () => [new Spinach(), new BlackOlive()];
    createPepperoni = () => new SlicePepperoni();
    createClam= () => new FrozenClam();
}

