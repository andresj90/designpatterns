import { DarkRoast } from "./DarkRoast";
import { Decaf } from "./Decaf";
import { Espresso } from "./Espresso";
import { HouseBlend } from "./HouseBlend";
import {MochaDecorator} from "./Mocha";
import { SoyDecorator } from "./Soy";
import { WhipDecorator } from "./Whip";

const expresso = new Espresso();
const darkRoast = new DarkRoast();
const decaf = new Decaf(); 
const houseBlend = new HouseBlend();

console.log({expresso, darkRoast, decaf, houseBlend}); //

let beverage = new Espresso();

beverage = new MochaDecorator(beverage);
beverage = new SoyDecorator(beverage);
beverage = new WhipDecorator(beverage);
beverage = new MochaDecorator(beverage);


console.log({mochaDecorator: {description: beverage.description, cost: beverage.cost}});
