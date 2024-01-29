import { Engine } from "./Engine";

export class Car {
    private _seats?: number; 
    private _engine?: Engine;
    private _gps?: string; 
    private _tripComputer?: string; 

    constructor() {
        
    }

    set  seats(seats: number) {
        this._seats = seats;
    }

    set engine(engine: Engine) {
        this._engine = engine;
    }

    set tripComputer(tripComputer: string) {
        this._tripComputer = tripComputer;
    }

    set gps(gps: string) {
        this._gps = gps;
    }
}