import { IEventListener } from "./IEventListener";

export class LogginListener implements IEventListener {
 update(filename: string): void {
     console.log("Notified about the logging change",filename)
 }

}