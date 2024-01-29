import { Transport } from "./Transport";

export class BalloonTransportation implements Transport{
    deliver(): void {
        console.log("Deliver By Balloon")
    }
}