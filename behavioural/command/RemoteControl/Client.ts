import { GarageDoorOpenCommand } from "./GarageDoorOpenCommand";
import { GarageDoor } from "./GarageDoorReceiver";
import { Light } from "./Light";
import { LightCommand } from "./LightCommand";
import { RemoteControl } from "./RemoteControlInvoker";

/**
 * The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.
 */
class Client {
    public remoteControl: RemoteControl = new RemoteControl();
    public constructor() {}

    //test case for light command
    public test1() {
        const light: Light = new Light();
        const lightCommand: LightCommand = new LightCommand(light);
        this.remoteControl.setCommand(lightCommand)
        this.remoteControl.onButtonPress(); 
    }

    // test case for garage door open comman
    public test2() {
        const garageDoor: GarageDoor = new GarageDoor(); // this is the receiver, which implements the actions
        const garageDoorCommand: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor); // this is the command that talks to the invoker object
        this.remoteControl.setCommand(garageDoorCommand) //this is the invoker object which associates a command and can call later on
        this.remoteControl.onButtonPress(); // invoker calls command upon action
    }
}

const client = new Client(); 
client.test1();
client.test2();
