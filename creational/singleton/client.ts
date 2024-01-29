import {Singleton} from "./singleton";

const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();
const singleton3 = Singleton.getInstance();

const isSameInstance = singleton1 === singleton2 && singleton3 === singleton1; 
console.log({isSameInstance})