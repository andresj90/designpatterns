import { Cheese } from "../ingredients/Cheese";
import { Clam } from "../ingredients/Clam";
import { Dough } from "../ingredients/Dough";
import { Pepperoni } from "../ingredients/Pepperoni";
import { Sauce } from "../ingredients/Sauce";
import { Veggie } from "../ingredients/Veggie";


/**
 * This class is aligning to the dependency inversion principle 
 * 
 * because it is coded for abstraction/compositions rather than concretion
 */

export abstract class Pizza {

    protected name: string = ''; 
    protected dough!: Dough;
    protected sauce!: Sauce ; 
    protected veggies: Array<Veggie> = []
    protected pepperoni!: Pepperoni; 
    protected clam!: Clam; 
    protected cheese : Cheese; 


    public abstract prepare(): void; // method that will be implemented by every pizza

    public bake() {
       console.log("Bake for 25 minutes at 350");
    }
        
    public cut() {
       console.log("Cutting the pizza into diagonal slices");
    }
        
    public box() {
       console.log("Place pizza in official PizzaStore box");    
    }

    public setName(name:string) {
        this.name = name;
    }
        
    getName(): string {
        return this.name;
    } 
} 