import {ChocolateBoiler} from "./ChocolateBoiler"

const chocolateBoiler1 = ChocolateBoiler.getInstance();
const chocolateBoiler2 = ChocolateBoiler.getInstance();

console.log({chocolateBoiler2})
chocolateBoiler1.fill();
console.log({chocolateBoiler1, chocolateBoiler2})
chocolateBoiler2.boil();
console.log({chocolateBoiler1, chocolateBoiler2})
chocolateBoiler1.drain();
console.log({chocolateBoiler1, chocolateBoiler2})

console.log("are equal : ", chocolateBoiler1 === chocolateBoiler2)