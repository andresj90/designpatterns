import { Transport } from "./Transport";
import { RoadTransportationCreator } from "./RoadTransportConcreteCreator";
import { AirTransportationCreator } from "./AirTransportConcreteCreator";

const transportationDictionary = new Map<string, Transport>();
const transportation : Transport = transportationDictionary.get("truck") ?? new RoadTransportationCreator().createTransportation("truck"); 
transportation.deliver();
const transportation2 : Transport = new AirTransportationCreator().createTransportation("balloon"); 
transportation2.deliver();