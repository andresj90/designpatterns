import { ICommand } from "./CommandInterface";
import { Light } from "./Light";

/**
 * The execute method calls the
    on() method on the receiving
    object, which is the light we
    are controlling.
 */
export class LightCommand implements ICommand {
    private light : Light; 
    
    public constructor(light : Light) {
        this.light = light;
    }
    public execute(){
        this.light.on();
    };

}