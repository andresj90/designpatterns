import { Observable } from "./Observable";
import { Observer } from "./Observer";

export class WeatherDataObservable implements Observable {
    private temperature: number;
    private humidity: number;
    private pressure: number;
    private observers : Array<Observer>; 

    public constructor() {
        this.observers = [];
        this.humidity = 0; //
        this.pressure = 0; //
        this.temperature = 0; //
    }

    public addObserver = (observer: Observer) => {
        this.observers.push(observer);
    } 

    public removeObserver =  (observer: Observer) => {
        this.observers = this.observers.filter(obs => obs !== observer)
    };

    public notifyObservers = () => {
        this.observers.forEach(observer => observer.update(this));
    }

    public setMeasurement(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity; 
        this.pressure = pressure;
        this.notifyObservers();
    }

    public getTemperature = () =>  this.temperature; 
    
    public getHumidity = () => this.humidity; 
    

    public getPressure = () =>  this.pressure;
    
}