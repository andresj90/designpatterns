import { Ceeling } from "./Ceeling";
import { ICommand } from "./CommandInterface";

export class CeelingFanHighommand implements ICommand {
    private ceeling : Ceeling; 
    public constructor(ceeling: Ceeling) {
        this.ceeling = ceeling;
    }
    public execute(){
        this.ceeling.high();
    }
}