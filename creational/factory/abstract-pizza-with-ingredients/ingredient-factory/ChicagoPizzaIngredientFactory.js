"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChicagoPizzaIngridientFactory = void 0;
const BlackOlive_1 = require("../ingredients/BlackOlive");
const FrozenClam_1 = require("../ingredients/FrozenClam");
const MozzarellaCheese_1 = require("../ingredients/MozzarellaCheese");
const PlumTomatoSauce_1 = require("../ingredients/PlumTomatoSauce");
const SlicePepperoni_1 = require("../ingredients/SlicePepperoni");
const Spinach_1 = require("../ingredients/Spinach");
const ThickCrustDough_1 = require("../ingredients/ThickCrustDough");
class ChicagoPizzaIngridientFactory {
    constructor() {
        this.createDough = () => new ThickCrustDough_1.ThickCrustDough();
        this.createSauce = () => new PlumTomatoSauce_1.PlumTomatoSauce();
        this.createCheese = () => new MozzarellaCheese_1.MozzarellaCheese();
        this.createVeggies = () => [new Spinach_1.Spinach(), new BlackOlive_1.BlackOlive()];
        this.createPepperoni = () => new SlicePepperoni_1.SlicePepperoni();
        this.createClam = () => new FrozenClam_1.FrozenClam();
    }
}
exports.ChicagoPizzaIngridientFactory = ChicagoPizzaIngridientFactory;
