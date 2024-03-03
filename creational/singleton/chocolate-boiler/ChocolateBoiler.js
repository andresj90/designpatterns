"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChocolateBoiler = void 0;
class ChocolateBoiler {
    constructor() {
        this.isEmpty = true;
        this.isBoiled = false;
    }
    static getInstance() {
        if (!this.chocolateBoiler) {
            return this.chocolateBoiler = new ChocolateBoiler();
        }
        return this.chocolateBoiler;
    }
    boil() {
        if (!this.isEmpty && !this.isBoiled) {
            this.isBoiled = true;
        }
    }
    drain() {
        if (!this.isEmpty && this.isBoiled) {
            this.isEmpty = true;
            this.isBoiled = false;
        }
    }
    fill() {
        if (this.isEmpty) {
            this.isEmpty = false;
            this.isBoiled = false;
        }
    }
    getIsEmpty() {
        return this.isEmpty;
    }
    getIsBoiled() {
        return this.isBoiled;
    }
}
exports.ChocolateBoiler = ChocolateBoiler;
ChocolateBoiler.chocolateBoiler = null;
