"use strict";
exports.__esModule = true;
exports.RemoteControl = void 0;
var RemoteControl = /** @class */ (function () {
    function RemoteControl() {
        this.slot = null;
    }
    RemoteControl.prototype.setCommand = function (command) {
        this.slot = command;
    };
    RemoteControl.prototype.onButtonPress = function () {
        var _a;
        (_a = this.slot) === null || _a === void 0 ? void 0 : _a.execute();
    };
    return RemoteControl;
}());
exports.RemoteControl = RemoteControl;
