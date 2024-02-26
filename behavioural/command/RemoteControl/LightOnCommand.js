"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOnCommand = void 0;
/**
 * The execute method calls the
    on() method on the receiving
    object, which is the light we
    are controlling.
 */
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(light) {
        this.light = light;
    }
    LightOnCommand.prototype.execute = function () {
        this.light.on();
    };
    ;
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
