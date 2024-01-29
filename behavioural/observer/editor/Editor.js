"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Editor = void 0;
const EventManager_1 = require("./EventManager");
class Editor {
    constructor() {
        this.events = new EventManager_1.EventManager();
    }
    openFile() {
        this.events.notify("OPEN", "file");
    }
    saveFile() {
        this.events.notify("SAVE", "file");
    }
}
exports.Editor = Editor;
