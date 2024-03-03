"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageDoorOpenCommand = void 0;
var GarageDoorOpenCommand = /** @class */ (function () {
    function GarageDoorOpenCommand(garageDoor) {
        this.garageDoor = garageDoor;
    }
    GarageDoorOpenCommand.prototype.undo = function () {
        this.garageDoor.lightOff();
        this.garageDoor.down();
        this.garageDoor.stop();
    };
    GarageDoorOpenCommand.prototype.execute = function () {
        this.garageDoor.lightOn();
        this.garageDoor.up();
        this.garageDoor.stop();
    };
    ;
    return GarageDoorOpenCommand;
}());
exports.GarageDoorOpenCommand = GarageDoorOpenCommand;
