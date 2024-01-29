import { Pizza } from "./Pizza";

export class NewYorkHawaiianPizza extends Pizza {
    bake(): void {
        throw new Error("Method not implemented.");
    }
    applyIngreddients(): void {
        throw new Error("Method not implemented.");
    }
    box(): void {
        throw new Error("Method not implemented.");
    }

}