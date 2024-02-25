"use strict";
exports.__esModule = true;
var Light_1 = require("./Light");
var LightCommand_1 = require("./LightCommand");
var RemoteControlInvoker_1 = require("./RemoteControlInvoker");
var Client = /** @class */ (function () {
    function Client() {
        this.remoteControl = new RemoteControlInvoker_1.RemoteControl();
    }
    Client.prototype.test1 = function () {
        var light = new Light_1.Light();
        var lightCommand = new LightCommand_1.LightCommand(light);
        this.remoteControl.setCommand(lightCommand);
        this.remoteControl.onButtonPress();
    };
    return Client;
}());
var client = new Client();
client.test1();
