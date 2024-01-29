"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheesePizza = void 0;
class CheesePizza {
    constructor() {
        this.applyIngreddients = () => {
            console.log("This pizza has only cheese");
        };
        this.bake = () => {
            console.log("Cheese pizza being baked");
        };
        this.box = () => {
            console.log("Cheese pizza being boxed");
        };
    }
}
exports.CheesePizza = CheesePizza;
