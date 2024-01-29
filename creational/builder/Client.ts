import {CarBuilder} from "./Car_Builder"; 
import { Director } from "./Director";

const carDirector = new Director();
const carBuilder = new CarBuilder();


carDirector.MakeSportCar(carBuilder);
const sportCar = carBuilder.getResult();
console.log({sportCar});

carDirector.MakeVanCar(carBuilder);
const vanCar = carBuilder.getResult();
console.log({vanCar});

console.log({sportCar, isSameCar: vanCar === sportCar});
