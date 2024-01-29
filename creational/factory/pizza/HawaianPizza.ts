import { IPizza } from "./IPizza";

export class HawaianPizza implements IPizza {
    applyIngreddients = () => {
        console.log("This pizza has only cheese and pineapple")
    } 

    bake =  () => {
        console.log("Hawaian pizza being baked")
    } 

    box = () =>  {
        console.log("Hawaian pizza being boxed")
    }
}