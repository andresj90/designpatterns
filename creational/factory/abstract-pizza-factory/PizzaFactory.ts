import {Pizza} from "./Pizza"

export abstract class PizzaFactory {
    abstract makePiza(type: string): Pizza;
}