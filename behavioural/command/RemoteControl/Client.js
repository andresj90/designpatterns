"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GarageDoorOpenCommand_1 = require("./GarageDoorOpenCommand");
var GarageDoorReceiver_1 = require("./GarageDoorReceiver");
var Light_1 = require("./Light");
var LightCommand_1 = require("./LightCommand");
var RemoteControlInvoker_1 = require("./RemoteControlInvoker");
var Client = /** @class */ (function () {
    function Client() {
        this.remoteControl = new RemoteControlInvoker_1.RemoteControl();
    }
    //test case for light command
    Client.prototype.test1 = function () {
        var light = new Light_1.Light();
        var lightCommand = new LightCommand_1.LightCommand(light);
        this.remoteControl.setCommand(lightCommand);
        this.remoteControl.onButtonPress();
    };
    // test case for garage door open comman
    Client.prototype.test2 = function () {
        var garageDoor = new GarageDoorReceiver_1.GarageDoor(); // this is the receiver, which implements the actions
        var garageDoorCommand = new GarageDoorOpenCommand_1.GarageDoorOpenCommand(garageDoor); // this is the command that talks to the invoker object
        this.remoteControl.setCommand(garageDoorCommand); //this is the invoker object which associates a command and can call later on
        this.remoteControl.onButtonPress(); // invoker calls command upon action
    };
    return Client;
}());
var client = new Client();
client.test1();
client.test2();
