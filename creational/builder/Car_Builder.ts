import {ICarBuilder} from "./ICar_Builder";
import {Car} from "./Car";
import { Engine } from "./Engine";

export class CarBuilder implements ICarBuilder {
    private car: Car | null = null;
    
    constructor(){  
    }
    setEngine(engine: Engine): void {
        if (this.car) {
            this.car.engine = engine;
        }
    }
    
    setGPS(): void {
        if (this.car) {
        this.car.gps = 'GPS SET';
        }
    }

    setSeats(seats: number): void {
        if (this.car) {
        this.car.seats = seats;
        }
    }

    setTripComputer(): void {
        if (this.car) {
        this.car.tripComputer = 'TripComputer'
        }
    }

    reset(): void {
        this.car = new Car();
    }

    getResult(): Car {
        return this.car ?? new Car();
    }
}