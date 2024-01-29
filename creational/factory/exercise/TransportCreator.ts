import {Transport} from "./Transport"
export abstract class Transportation {
    abstract createTransportation(type?:string): Transport; 
}