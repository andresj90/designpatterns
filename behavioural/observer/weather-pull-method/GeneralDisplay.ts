import { Observable } from "./Observable";
import { Observer } from "./Observer";
import { WeatherDataObservable } from "./WeatherDataObservable";

export class GeneralDisplay implements Observer {
    private observable: Observable; 

     public constructor(observable: Observable) {
        this.observable = observable;
        this.observable.addObserver(this);
     }
    
    update = (observable: Observable) => {
        if (observable instanceof WeatherDataObservable) {
            console.log("General Display ", {this: this, observable});
        }
    }
}