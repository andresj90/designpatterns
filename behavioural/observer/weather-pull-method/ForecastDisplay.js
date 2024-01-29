"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForecastDisplay = void 0;
const WeatherDataObservable_1 = require("./WeatherDataObservable");
class ForecastDisplay {
    constructor(observable) {
        this.update = (observable) => {
            if (observable instanceof WeatherDataObservable_1.WeatherDataObservable) {
                console.log("Forecast Display ", { this: this }, `
                the current weather is, humidity: ${observable.getHumidity()} , temperature: ${observable.getTemperature()} and pressure: ${observable.getPressure()}
            `);
            }
        };
        this.observable = observable;
        this.observable.addObserver(this);
    }
}
exports.ForecastDisplay = ForecastDisplay;
