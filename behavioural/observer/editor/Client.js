"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoggingListener_1 = require("./LoggingListener");
const EmailAlertListener_1 = require("./EmailAlertListener");
const Editor_1 = require("./Editor");
const loggingListener = new LoggingListener_1.LogginListener();
const emailAlertListener = new EmailAlertListener_1.EmailAlertListener();
const editor = new Editor_1.Editor();
editor.events.subscribe("OPEN", loggingListener);
editor.events.subscribe("OPEN", emailAlertListener);
editor.events.subscribe("SAVE", loggingListener);
editor.openFile(); //
editor.saveFile();
editor.events.unsubscribe("SAVE", emailAlertListener);
editor.events.unsubscribe("SAVE", loggingListener);
