"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ForecastDisplay_1 = require("./ForecastDisplay");
const GeneralDisplay_1 = require("./GeneralDisplay");
const WeatherDataObservable_1 = require("./WeatherDataObservable");
const weatherDataObservable = new WeatherDataObservable_1.WeatherDataObservable();
const forecastDataObservable = new ForecastDisplay_1.ForecastDisplay(weatherDataObservable);
const generalDisplayObservable = new GeneralDisplay_1.GeneralDisplay(weatherDataObservable);
weatherDataObservable.notifyObservers(); //
weatherDataObservable.setMeasurement(10, 20, 40);
