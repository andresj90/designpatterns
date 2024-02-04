"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewYorkPizzaIngridientFactory = void 0;
const FreshClam_1 = require("../ingredients/FreshClam");
const MarinaraSauce_1 = require("../ingredients/MarinaraSauce");
const Mushroom_1 = require("../ingredients/Mushroom");
const RedPeppers_1 = require("../ingredients/RedPeppers");
const ReggianoCheese_1 = require("../ingredients/ReggianoCheese");
const SlicePepperoni_1 = require("../ingredients/SlicePepperoni");
const ThinCrustDough_1 = require("../ingredients/ThinCrustDough");
/**
 * For each ingredient in the
ingredient family, we create
the New York version.
 */
class NewYorkPizzaIngridientFactory {
    constructor() {
        this.createDough = () => new ThinCrustDough_1.ThinCrustDough();
        this.createSauce = () => new MarinaraSauce_1.MarinaraSauce();
        this.createCheese = () => new ReggianoCheese_1.ReggianoCheese();
        this.createVeggies = () => [new Mushroom_1.Mushroom(), new RedPeppers_1.RedPepper()];
        this.createPepperoni = () => new SlicePepperoni_1.SlicePepperoni();
        this.createClam = () => new FreshClam_1.FreshClam();
    }
}
exports.NewYorkPizzaIngridientFactory = NewYorkPizzaIngridientFactory;
