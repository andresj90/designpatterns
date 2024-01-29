import { Transport } from "./Transport";

export class TruckTransportation implements Transport{
    deliver(): void {
        console.log("Deliver By Truck")
    }
}