"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralDisplay = void 0;
const WeatherDataObservable_1 = require("./WeatherDataObservable");
class GeneralDisplay {
    constructor(observable) {
        this.update = (observable) => {
            if (observable instanceof WeatherDataObservable_1.WeatherDataObservable) {
                console.log("General Display ", { this: this, observable });
            }
        };
        this.observable = observable;
        this.observable.addObserver(this);
    }
}
exports.GeneralDisplay = GeneralDisplay;
