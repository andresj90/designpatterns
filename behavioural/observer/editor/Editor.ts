import { EventManager } from "./EventManager";

export class Editor {
    public events: EventManager; //

    constructor() {
        this.events = new EventManager();
    }

    public openFile() {
        this.events.notify("OPEN", "file");
    }

    public saveFile() {
        this.events.notify("SAVE", "file");
    }
}