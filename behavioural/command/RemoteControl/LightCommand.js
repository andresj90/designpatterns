"use strict";
exports.__esModule = true;
exports.LightCommand = void 0;
/**
 * The execute method calls the
    on() method on the receiving
    object, which is the light we
    are controlling.
 */
var LightCommand = /** @class */ (function () {
    function LightCommand(light) {
        this.light = light;
    }
    LightCommand.prototype.execute = function () {
        this.light.on();
    };
    ;
    return LightCommand;
}());
exports.LightCommand = LightCommand;
