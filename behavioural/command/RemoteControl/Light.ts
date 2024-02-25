export class Light {
    private lightStatus: boolean = false; //
    public constructor () {}
    public on() {
        this.lightStatus = true;
        console.log("Light is on")
    }

    public off() {
        this.lightStatus = false;
        console.log("Light is off")
    }
}