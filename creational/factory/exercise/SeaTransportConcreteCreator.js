"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeaTransportationCreator = void 0;
const FerryTransportation_1 = require("./FerryTransportation");
const TransportCreator_1 = require("./TransportCreator");
class SeaTransportationCreator extends TransportCreator_1.Transportation {
    createTransportation(type) {
        switch (type) {
            case 'ferry':
                return new FerryTransportation_1.FerryTransportation();
            default:
                return new FerryTransportation_1.FerryTransportation();
        }
    }
}
exports.SeaTransportationCreator = SeaTransportationCreator;
