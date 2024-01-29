"use strict";
const person = {
    name: "John Smith",
    age: 21,
    nationality: "United Kingdom",
};
const personProxy = new Proxy(person, {
    set: (target, key, newValue) => {
        console.log(`The property ${key} will have new value ${newValue}`);
        if (key === "age" && typeof newValue === "number") {
            target[key] = newValue;
            return true;
        }
        else if (typeof newValue === "string" && (key === "nationality" || key === "name")) {
            target[key] = newValue;
            return true;
        }
        return false;
    },
    get: (target, key) => {
        console.log(`The property ${key} for ${JSON.stringify(target)} is ${target[key]}`);
        return target[key];
    }
});
console.log({ personProxy, person });
personProxy.name = "Andres Jara";
personProxy.age;
console.log({ personProxy, person });
