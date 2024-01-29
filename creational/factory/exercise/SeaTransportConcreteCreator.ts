import { FerryTransportation } from "./FerryTransportation";
import { Transport } from "./Transport";
import {Transportation} from "./TransportCreator"

export class SeaTransportationCreator extends Transportation{
    createTransportation(type?: string ): Transport {
        switch (type) {
            case 'ferry':
                return new FerryTransportation();
        
            default:
                return new FerryTransportation();
        }
    }

}