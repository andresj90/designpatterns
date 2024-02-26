"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CeelingFanOffCommand = void 0;
var CeelingFanOffCommand = /** @class */ (function () {
    function CeelingFanOffCommand(ceeling) {
        this.ceeling = ceeling;
    }
    CeelingFanOffCommand.prototype.execute = function () {
        this.ceeling.off();
    };
    return CeelingFanOffCommand;
}());
exports.CeelingFanOffCommand = CeelingFanOffCommand;
