import { Clam } from "./Clam";
import { Dough } from "./Dough";
import { Pepperoni } from "./Pepperoni";
import { Sauce } from "./Sauce";
import { Veggie } from "./Veggie";

export abstract class Pizza {

    protected name: string = ''; 
    protected dough!: Dough;
    protected sauce!: Sauce ; 
    protected veggies: Array<Veggie> = []
    protected pepperoni!: Pepperoni; 
    protected clam!: Clam; 


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