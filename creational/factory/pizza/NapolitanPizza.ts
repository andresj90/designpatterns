import { IPizza } from "./IPizza";

export class NapolitanPizza implements IPizza {
    applyIngreddients = () => {
        console.log("This pizza has only tomatoes")
    } 

    bake =  () => {
        console.log("Napolitan pizza being baked")
    } 

    box = () =>  {
        console.log("Napolitan pizza being boxed")
    }
}