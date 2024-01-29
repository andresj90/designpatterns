"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const singleton_1 = require("./singleton");
const singleton1 = singleton_1.Singleton.getInstance();
const singleton2 = singleton_1.Singleton.getInstance();
const singleton3 = singleton_1.Singleton.getInstance();
const isSameInstance = singleton1 === singleton2 && singleton3 === singleton1;
console.log({ isSameInstance });
