"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullCommand = void 0;
var NullCommand = /** @class */ (function () {
    function NullCommand() {
    }
    NullCommand.prototype.execute = function () {
    };
    ;
    NullCommand.prototype.undo = function () {
    };
    return NullCommand;
}());
exports.NullCommand = NullCommand;
