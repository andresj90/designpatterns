"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MacroCommand = void 0;
var MacroCommand = /** @class */ (function () {
    function MacroCommand(commands) {
        this.commands = commands;
    }
    MacroCommand.prototype.execute = function () {
        this.commands.forEach(function (command) {
            command.execute();
        });
    };
    ;
    MacroCommand.prototype.undo = function () {
        this.commands.forEach(function (command) {
            command.undo();
        });
    };
    return MacroCommand;
}());
exports.MacroCommand = MacroCommand;
