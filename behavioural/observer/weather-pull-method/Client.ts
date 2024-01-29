import { ForecastDisplay } from "./ForecastDisplay";
import { GeneralDisplay } from "./GeneralDisplay";
import { WeatherDataObservable } from "./WeatherDataObservable";


const weatherDataObservable = new WeatherDataObservable();
const forecastDataObservable = new ForecastDisplay(weatherDataObservable);
const generalDisplayObservable = new GeneralDisplay(weatherDataObservable);

weatherDataObservable.notifyObservers(); //

weatherDataObservable.setMeasurement(10,20,40); 
