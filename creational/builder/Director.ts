import {ICarBuilder} from "./ICar_Builder";
import {Engine} from "./Engine"

export class Director {
    constructor() {
    }

    public MakeSportCar(builder: ICarBuilder):void {
        builder.reset();
        builder.setSeats(4);
        builder.setEngine(new Engine("sport engine"));
        builder.setGPS();
        builder.setTripComputer();
    }

    public MakeVanCar(builder: ICarBuilder):void {
        builder.reset();
        builder.setSeats(2);
        builder.setEngine(new Engine("van engine"));
    }
}