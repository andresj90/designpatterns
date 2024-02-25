import { Light } from "./Light";
import { LightCommand } from "./LightCommand";
import { RemoteControl } from "./RemoteControlInvoker";

class Client {
    public remoteControl: RemoteControl = new RemoteControl();
    public constructor() {}

    public test1() {
        const light: Light = new Light();
        const lightCommand: LightCommand = new LightCommand(light);
        this.remoteControl.setCommand(lightCommand)
        this.remoteControl.onButtonPress(); 
    }
}

const client = new Client(); 
client.test1();
