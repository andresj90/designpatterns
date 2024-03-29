"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageDoorCloseCommand = void 0;
var GarageDoorCloseCommand = /** @class */ (function () {
    function GarageDoorCloseCommand(garageDoor) {
        this.garageDoor = garageDoor;
    }
    GarageDoorCloseCommand.prototype.undo = function () {
        this.garageDoor.lightOn();
        this.garageDoor.up();
        this.garageDoor.stop();
    };
    GarageDoorCloseCommand.prototype.execute = function () {
        this.garageDoor.lightOff();
        this.garageDoor.down();
        this.garageDoor.stop();
    };
    ;
    return GarageDoorCloseCommand;
}());
exports.GarageDoorCloseCommand = GarageDoorCloseCommand;
