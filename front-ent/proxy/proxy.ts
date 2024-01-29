type Person = {
    name: string;
    age: number;
    nationality: string;
}

interface proxyconstructor {
    revocable<t extends object>(target: t, handler: ProxyHandler<t>): { proxy: t; revoke: () => void; };
    new <t extends object>(target: t, handler: ProxyHandler<t>): t;
}
declare var proxy: proxyconstructor;

const person:Person = {
    name: "John Smith",
    age: 21,
    nationality: "United Kingdom",
}

const personProxy = new Proxy(person, {
    set: (target :  Person, key: keyof Person, newValue: string | number) => {
        console.log(`The property ${key} will have new value ${newValue}`); 
        if (key === "age" &&  typeof newValue === "number") {
            target[key] = newValue;
            return true
        } else if (typeof newValue === "string" && (key === "nationality" || key === "name")) {
            target[key] = newValue;
            return true; 
        }
        return false;
    },
    get :(target : Person, key: keyof Person) => {
        console.log(`The property ${key} for ${JSON.stringify(target)} is ${target[key]}`); 
        return target[key];
    }
}); 

console.log({personProxy, person})
personProxy.name = "Andres Jara"; 
personProxy.age;
console.log({personProxy, person})