"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogginListener = void 0;
class LogginListener {
    update(filename) {
        console.log("Notified about the logging change", filename);
    }
}
exports.LogginListener = LogginListener;
