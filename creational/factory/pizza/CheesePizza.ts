import { IPizza } from "./IPizza";

export class CheesePizza implements IPizza {
    applyIngreddients = () => {
        console.log("This pizza has only cheese")
    } 

    bake =  () => {
        console.log("Cheese pizza being baked")
    } 

    box = () =>  {
        console.log("Cheese pizza being boxed")
    }
}