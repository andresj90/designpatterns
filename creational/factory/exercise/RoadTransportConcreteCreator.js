"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoadTransportationCreator = void 0;
const TransportCreator_1 = require("./TransportCreator");
const TruckTransportation_1 = require("./TruckTransportation");
class RoadTransportationCreator extends TransportCreator_1.Transportation {
    createTransportation(type) {
        switch (type) {
            case 'truck':
                return new TruckTransportation_1.TruckTransportation();
            default:
                return new TruckTransportation_1.TruckTransportation();
        }
    }
}
exports.RoadTransportationCreator = RoadTransportationCreator;
