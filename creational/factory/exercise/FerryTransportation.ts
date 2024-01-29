import { Transport } from "./Transport";

export class FerryTransportation implements Transport{
    deliver(): void {
        console.log("Deliver By Ferry")
    }
}