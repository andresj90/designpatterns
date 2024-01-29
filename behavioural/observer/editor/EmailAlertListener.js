"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailAlertListener = void 0;
class EmailAlertListener {
    update(filename) {
        console.log("Notified about the email alert change", filename);
    }
}
exports.EmailAlertListener = EmailAlertListener;
