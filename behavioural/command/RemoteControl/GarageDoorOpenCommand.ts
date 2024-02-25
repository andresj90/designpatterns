import { ICommand } from "./CommandInterface";
import { GarageDoor } from "./GarageDoorReceiver";

export class GarageDoorOpenCommand implements ICommand {
    private garageDoor :GarageDoor;
    public constructor(garageDoor: GarageDoor){
        this.garageDoor = garageDoor;
    }
    public execute() {
        this.garageDoor.lightOn();
        this.garageDoor.up();
        this.garageDoor.stop();
    };
}