export class Ceeling {
    private lightStatus: boolean = false; //
    public constructor () {}
    public high() {
        this.lightStatus = true;
        console.log("Ceeling is on");
    }

    public off() {
        this.lightStatus = false;
        console.log("Ceeling is off");
    }
}