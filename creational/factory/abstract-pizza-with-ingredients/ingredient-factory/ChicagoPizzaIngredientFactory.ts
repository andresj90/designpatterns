import { BlackOlive } from "../ingredients/BlackOlive";
import { FrozenClam } from "../ingredients/FrozenClam";
import { MozzarellaCheese } from "../ingredients/MozzarellaCheese";
import { PizzaIngredientFactory } from "./PizzaIngredientFactory";
import { PlumTomatoSauce } from "../ingredients/PlumTomatoSauce";
import { SlicePepperoni } from "../ingredients/SlicePepperoni";
import { Spinach } from "../ingredients/Spinach";
import { ThickCrustDough } from "../ingredients/ThickCrustDough";

export class ChicagoPizzaIngridientFactory implements PizzaIngredientFactory {
    createDough = () =>  new ThickCrustDough(); 
    createSauce = () => new PlumTomatoSauce();
    createCheese = () =>  new MozzarellaCheese();
    createVeggies =  () => [new Spinach(), new BlackOlive()];
    createPepperoni = () => new SlicePepperoni();
    createClam= () => new FrozenClam();
}

