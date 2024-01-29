import {Engine} from "./Engine"
export interface ICarBuilder {
    reset(): void;
    setSeats(seats: number): void;
    setEngine(engine:Engine): void; 
    setTripComputer(): void; 
    setGPS(): void;
}