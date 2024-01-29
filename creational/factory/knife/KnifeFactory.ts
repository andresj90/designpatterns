import { BudgetKnifeStore } from "./BudgetKnifeStore";
import {KnifeStore} from "./KnifeStore"

//this s a factory object
class KnifeFactory {

    constructor() {
        
    }

    static createBudgetKnife(type: string): KnifeStore | null {
        let budgetKnifeCreator = new BudgetKnifeStore(); 
        const concreteBudgetKnife = budgetKnifeCreator.createKnife(type);
        return concreteBudgetKnife;
    }
}