import { IEventListener } from "./IEventListener";

export class EmailAlertListener implements IEventListener {
 update(filename: string): void {
     console.log("Notified about the email alert change",filename)
 }

}