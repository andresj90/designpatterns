import { ICommand } from "./CommandInterface";
import { Light } from "./Light";
import { Stereo } from "./Stereo";

export class StereoOffForCd implements ICommand {
    private stereo : Stereo; 
    public constructor(stereo: Stereo) {
        this.stereo = stereo;
    }
    public execute(){
        this.stereo.off();
    }
}