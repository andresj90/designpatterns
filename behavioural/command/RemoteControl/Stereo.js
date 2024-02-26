"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stereo = void 0;
var Stereo = /** @class */ (function () {
    function Stereo() {
        this.lightStatus = false; //
    }
    Stereo.prototype.on = function () {
        this.lightStatus = true;
        console.log("Stereo is on");
    };
    Stereo.prototype.off = function () {
        this.lightStatus = false;
        console.log("Stereo is off");
    };
    return Stereo;
}());
exports.Stereo = Stereo;
