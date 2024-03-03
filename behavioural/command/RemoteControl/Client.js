"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Ceeling_1 = require("./Ceeling");
var CeelingFanHighCommand_1 = require("./CeelingFanHighCommand");
var CeelingFanOffCommand_1 = require("./CeelingFanOffCommand");
var GarageDoorCloseCommand_1 = require("./GarageDoorCloseCommand");
var GarageDoorOpenCommand_1 = require("./GarageDoorOpenCommand");
var GarageDoorReceiver_1 = require("./GarageDoorReceiver");
var Light_1 = require("./Light");
var LightOffCommand_1 = require("./LightOffCommand");
var LightOnCommand_1 = require("./LightOnCommand");
var MacroCommand_1 = require("./MacroCommand");
var RemoteControlInvoker_1 = require("./RemoteControlInvoker");
var Stereo_1 = require("./Stereo");
var StereoOffForCdCommand_1 = require("./StereoOffForCdCommand");
var StereoOnForCdCommand_1 = require("./StereoOnForCdCommand");
/**
 * The Command Pattern encapsulates a request as an object, thereby letting you parameterize other objects with different requests, queue or log requests, and support undoable operations.
 */
var Client = /** @class */ (function () {
    function Client() {
    }
    /*
    //test case for light command
    public test1() {
        const light: Light = new Light();
        const lightCommand: LightOnCommand = new LightOnCommand(light);
        this.remoteControl.setCommand(lightCommand)
        this.remoteControl.onButtonPress();
    }

    // test case for garage door open command
    public test2() {
        const garageDoor: GarageDoor = new GarageDoor(); // this is the receiver, which implements the actions
        const garageDoorCommand: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor); // this is the command that talks to the invoker object
        this.remoteControl.setCommand(garageDoorCommand) //this is the invoker object which associates a command and can call later on
        this.remoteControl.onButtonPress(); // invoker calls command upon action
    }
    */
    Client.prototype.test1 = function () {
        var remoteControl = new RemoteControlInvoker_1.RemoteControl();
        var light = new Light_1.Light();
        var lightOnCommand = new LightOnCommand_1.LightOnCommand(light);
        var lightOffCommand = new LightOffCommand_1.LightOffCommand(light);
        //living room light
        remoteControl.setCommand(0, lightOnCommand, lightOffCommand);
        //kitchen light
        remoteControl.setCommand(1, lightOnCommand, lightOffCommand);
        var ceeling = new Ceeling_1.Ceeling();
        var ceelingFanOffCommand = new CeelingFanOffCommand_1.CeelingFanOffCommand(ceeling);
        var ceelingFanOnCommand = new CeelingFanHighCommand_1.CeelingFanHighommand(ceeling);
        // living room ceeling fan
        remoteControl.setCommand(2, ceelingFanOnCommand, ceelingFanOffCommand);
        var garageDoor = new GarageDoorReceiver_1.GarageDoor();
        var garageDoorOpenCommand = new GarageDoorOpenCommand_1.GarageDoorOpenCommand(garageDoor);
        var garageDoorCloseCommand = new GarageDoorCloseCommand_1.GarageDoorCloseCommand(garageDoor);
        // garage door 
        remoteControl.setCommand(3, garageDoorOpenCommand, garageDoorCloseCommand);
        var stereo = new Stereo_1.Stereo();
        var stereoOnCommand = new StereoOnForCdCommand_1.StereoOnForCd(stereo);
        var stereoOffCommand = new StereoOffForCdCommand_1.StereoOffForCd(stereo);
        // garage door 
        remoteControl.setCommand(4, stereoOnCommand, stereoOffCommand);
        remoteControl.getSlotList().forEach(function (_, index) {
            remoteControl.onButtonPress(index);
            remoteControl.getLastCommand();
            remoteControl.offButtonPress(index);
            remoteControl.getLastCommand();
        });
    };
    Client.prototype.testMacroCommand = function () {
        var remoteControl = new RemoteControlInvoker_1.RemoteControl();
        var light = new Light_1.Light();
        var lightOnCommand = new LightOnCommand_1.LightOnCommand(light);
        var lightOffCommand = new LightOffCommand_1.LightOffCommand(light);
        var ceeling = new Ceeling_1.Ceeling();
        var ceelingFanOffCommand = new CeelingFanOffCommand_1.CeelingFanOffCommand(ceeling);
        var ceelingFanOnCommand = new CeelingFanHighCommand_1.CeelingFanHighommand(ceeling);
        var garageDoor = new GarageDoorReceiver_1.GarageDoor();
        var garageDoorOpenCommand = new GarageDoorOpenCommand_1.GarageDoorOpenCommand(garageDoor);
        var garageDoorCloseCommand = new GarageDoorCloseCommand_1.GarageDoorCloseCommand(garageDoor);
        var stereo = new Stereo_1.Stereo();
        var stereoOnCommand = new StereoOnForCdCommand_1.StereoOnForCd(stereo);
        var stereoOffCommand = new StereoOffForCdCommand_1.StereoOffForCd(stereo);
        var macroOnCommands = new MacroCommand_1.MacroCommand([lightOnCommand, ceelingFanOnCommand, garageDoorOpenCommand, stereoOnCommand]);
        var macroOffCommands = new MacroCommand_1.MacroCommand([lightOffCommand, ceelingFanOffCommand, garageDoorCloseCommand, stereoOffCommand]);
        remoteControl.setCommand(0, macroOnCommands, macroOffCommands);
        remoteControl.onButtonPress(0);
        remoteControl.offButtonPress(0);
        remoteControl.undo();
    };
    return Client;
}());
var client = new Client();
client.test1();
client.testMacroCommand();
