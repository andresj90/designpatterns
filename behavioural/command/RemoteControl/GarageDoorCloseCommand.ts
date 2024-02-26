import { ICommand } from "./CommandInterface";
import { GarageDoor } from "./GarageDoorReceiver";

export class GarageDoorCloseCommand implements ICommand {
    private garageDoor :GarageDoor;
    public constructor(garageDoor: GarageDoor){
        this.garageDoor = garageDoor;
    }
    public execute() {
        this.garageDoor.lightOff();
        this.garageDoor.down();
        this.garageDoor.stop();
    };
}