"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Light = void 0;
var Light = /** @class */ (function () {
    function Light() {
        this.lightStatus = false; //
    }
    Light.prototype.on = function () {
        this.lightStatus = true;
        console.log("Light is on");
    };
    Light.prototype.off = function () {
        this.lightStatus = false;
        console.log("Light is off");
    };
    return Light;
}());
exports.Light = Light;
