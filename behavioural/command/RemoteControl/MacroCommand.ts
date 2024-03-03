import { ICommand } from "./CommandInterface";

export class MacroCommand implements ICommand{
    private commands : Array<ICommand>;

    public constructor(commands: Array<ICommand>){
        this.commands = commands;
    }
    public execute(){
        this.commands.forEach((command)=>{
            command.execute();
        });
    };
    public undo(): void {
        this.commands.forEach((command)=>{
            command.undo();
        });
    }

}