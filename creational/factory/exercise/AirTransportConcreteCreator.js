"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTransportationCreator = void 0;
const BalloonTransportation_1 = require("./BalloonTransportation");
const TransportCreator_1 = require("./TransportCreator");
class AirTransportationCreator extends TransportCreator_1.Transportation {
    createTransportation(type) {
        switch (type) {
            case 'balloon':
                return new BalloonTransportation_1.BalloonTransportation();
            default:
                return new BalloonTransportation_1.BalloonTransportation();
                ;
        }
    }
}
exports.AirTransportationCreator = AirTransportationCreator;
