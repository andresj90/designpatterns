"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
class Singleton {
    constructor() {
        this.instance = null;
    }
    static getInstance() {
        if (!this.prototype.instance) {
            this.prototype.instance = new Singleton();
        }
        return this.prototype.instance;
    }
}
exports.Singleton = Singleton;
