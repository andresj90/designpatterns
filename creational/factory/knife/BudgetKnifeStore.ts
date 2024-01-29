import { ButcherBudgetKnife } from "./ButcherBudgetKnife";
import { ChefBudgetKnife } from "./ChefBudgetKnife";
import {KnifeStore} from "./KnifeStore"

export class BudgetKnifeStore extends KnifeStore {
    createKnife(type: string): BudgetKnifeStore | null  {
        switch (type ) {
            case "chef":
                return new ChefBudgetKnife();
            case "butcher":  
                return new ButcherBudgetKnife();     
            default:
                return null; 
        }
    }
}