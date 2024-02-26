"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.MAXSLOTS = 7;
        this.onSlot = [];
        this.offSlot = [];
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
    };
    RemoteControl.prototype.offButtonPress = function (position) {
        var _a;
        (_a = this.offSlot[position]) === null || _a === void 0 ? void 0 : _a.execute();
    };
    RemoteControl.prototype.getSlotList = function () {
        return this.onSlot;
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
