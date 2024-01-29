"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
const Engine_1 = require("./Engine");
class Director {
    constructor() {
    }
    MakeSportCar(builder) {
        builder.reset();
        builder.setSeats(4);
        builder.setEngine(new Engine_1.Engine("sport engine"));
        builder.setGPS();
        builder.setTripComputer();
    }
    MakeVanCar(builder) {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(new Engine_1.Engine("van engine"));
    }
}
exports.Director = Director;
