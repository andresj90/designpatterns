import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { WeatherDataObservable } from "./WeatherDataObservable";

export class ForecastDisplay implements Observer {
    private observable: Observable; 

     public constructor(observable: Observable) {
        this.observable = observable;
        this.observable.addObserver(this);
     }
    
    update = (observable: Observable) => {
        if (observable instanceof WeatherDataObservable) {
            console.log("Forecast Display ", {this: this}, `
                the current weather is, humidity: ${observable.getHumidity()} , temperature: ${observable.getTemperature()} and pressure: ${observable.getPressure()}
            `);
        }
    }
}