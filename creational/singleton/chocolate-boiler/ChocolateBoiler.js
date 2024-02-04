"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChocolateBoiler = void 0;
var ChocolateBoiler = /** @class */ (function () {
    function ChocolateBoiler() {
        this.isEmpty = true;
        this.isBoiled = false;
    }
    ChocolateBoiler.getInstance = function () {
        if (!this.chocolateBoiler) {
            return this.chocolateBoiler = new ChocolateBoiler();
        }
        return this.chocolateBoiler;
    };
    ChocolateBoiler.prototype.boil = function () {
        if (!this.isEmpty && !this.isBoiled) {
            this.isBoiled = true;
        }
    };
    ChocolateBoiler.prototype.drain = function () {
        if (!this.isEmpty && this.isBoiled) {
            this.isEmpty = true;
            this.isBoiled = false;
        }
    };
    ChocolateBoiler.prototype.fill = function () {
        if (this.isEmpty) {
            this.isEmpty = false;
            this.isBoiled = false;
        }
    };
    ChocolateBoiler.prototype.getIsEmpty = function () {
        return this.isEmpty;
    };
    ChocolateBoiler.prototype.getIsBoiled = function () {
        return this.isBoiled;
    };
    ChocolateBoiler.chocolateBoiler = null;
    return ChocolateBoiler;
}());
exports.ChocolateBoiler = ChocolateBoiler;
