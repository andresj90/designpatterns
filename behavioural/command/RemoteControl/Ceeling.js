"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ceeling = void 0;
var Ceeling = /** @class */ (function () {
    function Ceeling() {
        this.lightStatus = false; //
    }
    Ceeling.prototype.high = function () {
        this.lightStatus = true;
        console.log("Ceeling is on");
    };
    Ceeling.prototype.off = function () {
        this.lightStatus = false;
        console.log("Ceeling is off");
    };
    return Ceeling;
}());
exports.Ceeling = Ceeling;
