import { ICommand } from "./CommandInterface";

export class RemoteControl {
    public MAXSLOTS:number = 7; 

    private onSlot: Array<ICommand> = [];
    private offSlot: Array<ICommand> = [];

    public constructor() {}

    public setCommand(position: number, onCommand: ICommand, offCommand: ICommand): void {
        if (position >= 0 && position < this.MAXSLOTS) {
            this.onSlot[position] = onCommand; 
            this.offSlot[position] = offCommand;
    }
        }

    public onButtonPress(position: number) {
        this.onSlot[position]?.execute();
    }
    
    public offButtonPress(position:number) {
        this.offSlot[position]?.execute();
    }

    public getSlotList() {
        return this.onSlot;
    }
  
}