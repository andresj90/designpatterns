"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherDataObservable = void 0;
class WeatherDataObservable {
    constructor() {
        this.addObserver = (observer) => {
            this.observers.push(observer);
        };
        this.removeObserver = (observer) => {
            this.observers = this.observers.filter(obs => obs !== observer);
        };
        this.notifyObservers = () => {
            this.observers.forEach(observer => observer.update(this));
        };
        this.getTemperature = () => this.temperature;
        this.getHumidity = () => this.humidity;
        this.getPressure = () => this.pressure;
        this.observers = [];
        this.humidity = 0; //
        this.pressure = 0; //
        this.temperature = 0; //
    }
    setMeasurement(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    }
}
exports.WeatherDataObservable = WeatherDataObservable;
