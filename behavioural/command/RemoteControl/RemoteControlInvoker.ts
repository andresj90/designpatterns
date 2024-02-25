import { ICommand } from "./CommandInterface";

export class RemoteControl {
    private slot: ICommand | null = null;

    public constructor() {}

    public setCommand(command: ICommand): void {
        this.slot = command;
    }

    public onButtonPress() {
        this.slot?.execute();
    }
}