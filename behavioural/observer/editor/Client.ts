import { LogginListener } from "./LoggingListener";
import { EmailAlertListener } from "./EmailAlertListener";
import { Editor } from "./Editor"; 


const loggingListener = new LogginListener();
const emailAlertListener = new EmailAlertListener(); 
const editor = new Editor();

editor.events.subscribe("OPEN", loggingListener);
editor.events.subscribe("OPEN", emailAlertListener);

editor.events.subscribe("SAVE",loggingListener )

editor.openFile(); //

editor.saveFile();

editor.events.unsubscribe("SAVE", emailAlertListener);
editor.events.unsubscribe("SAVE", loggingListener);
