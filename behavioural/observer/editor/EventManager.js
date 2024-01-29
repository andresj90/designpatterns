"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventManager = void 0;
class EventManager {
    constructor() {
        this.listeners = new Map();
    }
    subscribe(eventType, listener) {
        const values = this.listeners.get(eventType);
        if (values) {
            values.push(listener);
            this.listeners.set(eventType, values);
            console.log("New Suscription ", this.listeners);
        }
        else {
            this.listeners.set(eventType, [listener]);
            console.log("New Suscription ", this.listeners);
        }
    }
    unsubscribe(eventType, listener) {
        const values = this.listeners.get(eventType);
        if (values) {
            const newValue = values.filter(v => v !== listener);
            this.listeners.set(eventType, newValue);
            console.log("Removed Suscription ", this.listeners);
        }
    }
    notify(eventType, data) {
        const listeners = this.listeners.get(eventType);
        if (listeners) {
            listeners.forEach(listener => {
                listener.update(data);
            });
        }
    }
}
exports.EventManager = EventManager;
