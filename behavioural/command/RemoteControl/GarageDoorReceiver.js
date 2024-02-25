"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarageDoor = void 0;
var GarageDoor = /** @class */ (function () {
    function GarageDoor() {
    }
    GarageDoor.prototype.up = function () {
        console.log("Garage Door is Open");
    };
    GarageDoor.prototype.down = function () {
        console.log("doGarage Door is down");
    };
    GarageDoor.prototype.stop = function () {
        console.log("Garage Door is Stopped");
    };
    GarageDoor.prototype.lightOn = function () {
        console.log("Garage Door light is on");
    };
    GarageDoor.prototype.lightOff = function () {
        console.log("Garage Door light is off");
    };
    return GarageDoor;
}());
exports.GarageDoor = GarageDoor;
