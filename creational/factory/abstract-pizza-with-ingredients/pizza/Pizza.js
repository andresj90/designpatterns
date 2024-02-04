"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
/**
 * This class is aligning to the dependency inversion principle
 *
 * because it is coded for abstraction/compositions rather than concretion
 */
class Pizza {
    constructor() {
        this.name = '';
        this.veggies = [];
    }
    bake() {
        console.log("Bake for 25 minutes at 350");
    }
    cut() {
        console.log("Cutting the pizza into diagonal slices");
    }
    box() {
        console.log("Place pizza in official PizzaStore box");
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.Pizza = Pizza;
