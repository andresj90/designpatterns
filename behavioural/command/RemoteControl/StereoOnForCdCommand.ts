import { ICommand } from "./CommandInterface";
import { Stereo } from "./Stereo";

export class StereoOnForCd implements ICommand {
    private stereo : Stereo; 
    public constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    public undo(): void {
        this.stereo.off();
    }

    public execute(){
        this.stereo.on();
    }
}