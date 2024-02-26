export class Stereo {
    private lightStatus: boolean = false; //
    public constructor () {}
    public on() {
        this.lightStatus = true;
        console.log("Stereo is on")
    }

    public off() {
        this.lightStatus = false;
        console.log("Stereo is off")
    }
}