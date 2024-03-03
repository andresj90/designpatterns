"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOffCommand = void 0;
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(light) {
        this.light = light;
    }
    LightOffCommand.prototype.undo = function () {
        this.light.on();
    };
    LightOffCommand.prototype.execute = function () {
        this.light.off();
    };
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
