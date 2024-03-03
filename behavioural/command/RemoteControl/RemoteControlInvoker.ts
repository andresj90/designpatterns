import { ICommand } from "./CommandInterface";
import {NullCommand} from "./NullCommand";

export class RemoteControl {
    public MAXSLOTS:number = 7; 

    private onSlot: Array<ICommand> = [];
    private offSlot: Array<ICommand> = [];
    private lastSlotPressed: ICommand = new NullCommand();

    public constructor() {}

    public setCommand(position: number, onCommand: ICommand, offCommand: ICommand): void {
        if (position >= 0 && position < this.MAXSLOTS) {
            this.onSlot[position] = onCommand; 
            this.offSlot[position] = offCommand;
    }
        }

    public onButtonPress(position: number) {
        this.onSlot[position]?.execute();
        this.lastSlotPressed = this.onSlot[position];
    }
    
    public offButtonPress(position:number) {
        this.offSlot[position]?.execute();
        this.lastSlotPressed = this.onSlot[position];
    }

    public undo() {
        this.lastSlotPressed.undo();
        this.lastSlotPressed = new NullCommand();
    }

    public getSlotList() {
        return this.onSlot;
    }

    public getLastCommand():ICommand{
        console.log({lastSlotPressed: this.lastSlotPressed})
        return this.lastSlotPressed;
    }
  
}