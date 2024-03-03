"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeelingFanHighommand = void 0;
var CeelingFanHighommand = /** @class */ (function () {
    function CeelingFanHighommand(ceeling) {
        this.ceeling = ceeling;
    }
    CeelingFanHighommand.prototype.undo = function () {
        this.ceeling.off();
    };
    ;
    CeelingFanHighommand.prototype.execute = function () {
        this.ceeling.high();
    };
    return CeelingFanHighommand;
}());
exports.CeelingFanHighommand = CeelingFanHighommand;
