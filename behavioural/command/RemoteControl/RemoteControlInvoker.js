"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var NullCommand_1 = require("./NullCommand");
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.MAXSLOTS = 7;
        this.onSlot = [];
        this.offSlot = [];
        this.lastSlotPressed = new NullCommand_1.NullCommand();
    }
    RemoteControl.prototype.setCommand = function (position, onCommand, offCommand) {
        if (position >= 0 && position < this.MAXSLOTS) {
            this.onSlot[position] = onCommand;
            this.offSlot[position] = offCommand;
        }
    };
    RemoteControl.prototype.onButtonPress = function (position) {
        var _a;
        (_a = this.onSlot[position]) === null || _a === void 0 ? void 0 : _a.execute();
        this.lastSlotPressed = this.onSlot[position];
    };
    RemoteControl.prototype.offButtonPress = function (position) {
        var _a;
        (_a = this.offSlot[position]) === null || _a === void 0 ? void 0 : _a.execute();
        this.lastSlotPressed = this.onSlot[position];
    };
    RemoteControl.prototype.undo = function () {
        this.lastSlotPressed.undo();
        this.lastSlotPressed = new NullCommand_1.NullCommand();
    };
    RemoteControl.prototype.getSlotList = function () {
        return this.onSlot;
    };
    RemoteControl.prototype.getLastCommand = function () {
        console.log({ lastSlotPressed: this.lastSlotPressed });
        return this.lastSlotPressed;
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
