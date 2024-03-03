import { ICommand } from "./CommandInterface";
import { Light } from "./Light";

export class LightOffCommand implements ICommand {
    private light : Light; 
    public constructor(light: Light) {
        this.light = light;
    }
    public undo(): void {
        this.light.on();
    }
    public execute(){
        this.light.off();
    }
}