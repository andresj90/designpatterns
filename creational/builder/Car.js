"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor() {
    }
    set seats(seats) {
        this._seats = seats;
    }
    set engine(engine) {
        this._engine = engine;
    }
    set tripComputer(tripComputer) {
        this._tripComputer = tripComputer;
    }
    set gps(gps) {
        this._gps = gps;
    }
}
exports.Car = Car;
