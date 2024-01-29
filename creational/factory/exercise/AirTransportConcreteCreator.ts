import { BalloonTransportation } from "./BalloonTransportation";
import { Transport } from "./Transport";
import {Transportation} from "./TransportCreator"
export class AirTransportationCreator extends Transportation{
    createTransportation(type?: string ): Transport {
        switch (type) {
            case 'balloon':
                return new BalloonTransportation();
        
            default:
                return new BalloonTransportation();;
        }
    }

}