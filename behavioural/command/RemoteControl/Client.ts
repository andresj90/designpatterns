import { Ceeling } from "./Ceeling";
import { CeelingFanHighommand } from "./CeelingFanHighCommand";
import { CeelingFanOffCommand } from "./CeelingFanOffCommand";
import { GarageDoorCloseCommand } from "./GarageDoorCloseCommand";
import { GarageDoorOpenCommand } from "./GarageDoorOpenCommand";
import { GarageDoor } from "./GarageDoorReceiver";
import { Light } from "./Light";
import { LightOffCommand } from "./LightOffCommand";
import { LightOnCommand } from "./LightOnCommand";
import { RemoteControl } from "./RemoteControlInvoker";
import { Stereo } from "./Stereo";
import { StereoOffForCd } from "./StereoOffForCdCommand";
import { StereoOnForCd } from "./StereoOnForCdCommand";

/**
 * The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.
 */
class Client {
    public remoteControl: RemoteControl = new RemoteControl();
    public constructor() {}

    /*
    //test case for light command
    public test1() {
        const light: Light = new Light();
        const lightCommand: LightOnCommand = new LightOnCommand(light);
        this.remoteControl.setCommand(lightCommand)
        this.remoteControl.onButtonPress(); 
    }

    // test case for garage door open command
    public test2() {
        const garageDoor: GarageDoor = new GarageDoor(); // this is the receiver, which implements the actions
        const garageDoorCommand: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor); // this is the command that talks to the invoker object
        this.remoteControl.setCommand(garageDoorCommand) //this is the invoker object which associates a command and can call later on
        this.remoteControl.onButtonPress(); // invoker calls command upon action
    }
    */

    public test1() {
        const light: Light = new Light();
        const lightOnCommand: LightOnCommand = new LightOnCommand(light);
        const lightOffCommand: LightOffCommand = new LightOffCommand(light);
        //living room light
        this.remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
        //kitchen light
        this.remoteControl.setCommand(1, lightOnCommand, lightOffCommand);
        const ceeling: Ceeling = new Ceeling();
        const ceelingFanOffCommand: CeelingFanOffCommand = new CeelingFanOffCommand(ceeling);
        const ceelingFanOnCommand: CeelingFanHighommand = new CeelingFanHighommand(ceeling);

        // living room ceeling fan
        this.remoteControl.setCommand(2, ceelingFanOnCommand, ceelingFanOffCommand);

        const garageDoor:GarageDoor = new GarageDoor();
        const garageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);
        const garageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);

        // garage door 
        this.remoteControl.setCommand(3, garageDoorOpenCommand, garageDoorCloseCommand);

        const stereo = new Stereo();
        const stereoOnCommand = new StereoOnForCd(stereo);
        const stereoOffCommand = new StereoOffForCd(stereo);

        // garage door 
        this.remoteControl.setCommand(4, stereoOnCommand, stereoOffCommand);

        this.remoteControl.getSlotList().forEach((_,index) => {
            this.remoteControl.onButtonPress(index);
            this.remoteControl.offButtonPress(index);
        })

    }

}

const client = new Client(); 

client.test1();