"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarBuilder = void 0;
const Car_1 = require("./Car");
class CarBuilder {
    constructor() {
        this.car = null;
    }
    setEngine(engine) {
        if (this.car) {
            this.car.engine = engine;
        }
    }
    setGPS() {
        if (this.car) {
            this.car.gps = 'GPS SET';
        }
    }
    setSeats(seats) {
        if (this.car) {
            this.car.seats = seats;
        }
    }
    setTripComputer() {
        if (this.car) {
            this.car.tripComputer = 'TripComputer';
        }
    }
    reset() {
        this.car = new Car_1.Car();
    }
    getResult() {
        var _a;
        return (_a = this.car) !== null && _a !== void 0 ? _a : new Car_1.Car();
    }
}
exports.CarBuilder = CarBuilder;
