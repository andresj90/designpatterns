import { ICommand } from "./CommandInterface";

export class NullCommand implements     ICommand {
    public execute() : void {
        
    };
    public undo(): void {
        
    }

}