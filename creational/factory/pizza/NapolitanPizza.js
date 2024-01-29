"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NapolitanPizza = void 0;
class NapolitanPizza {
    constructor() {
        this.applyIngreddients = () => {
            console.log("This pizza has only tomatoes");
        };
        this.bake = () => {
            console.log("Napolitan pizza being baked");
        };
        this.box = () => {
            console.log("Napolitan pizza being boxed");
        };
    }
}
exports.NapolitanPizza = NapolitanPizza;
