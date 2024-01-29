import { Transport } from "./Transport";
import {Transportation} from "./TransportCreator"
import { TruckTransportation } from "./TruckTransportation";
export class RoadTransportationCreator extends Transportation{
    createTransportation(type?: string ): Transport {
        switch (type) {
            case 'truck':
                return new TruckTransportation();
        
            default:
                return new TruckTransportation();
        }
    }

}