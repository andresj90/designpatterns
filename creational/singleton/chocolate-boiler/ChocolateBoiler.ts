export class ChocolateBoiler {
    private static chocolateBoiler: ChocolateBoiler| null = null; 
    private isEmpty : boolean; 
    private isBoiled: boolean;

    private constructor(){
        this.isEmpty = true; 
        this.isBoiled = false;
    }

    public static getInstance(): ChocolateBoiler  {
        if (!this.chocolateBoiler) {
            return this.chocolateBoiler = new ChocolateBoiler();
        }
        return this.chocolateBoiler;
    }

    public boil() {
        if (!this.isEmpty && !this.isBoiled) {
            this.isBoiled = true; 
        }
    }

    public drain(){
        if (!this.isEmpty && this.isBoiled) {
            this.isEmpty = true; 
            this.isBoiled = false; 
        }
    }

    public fill() {
        if (this.isEmpty) {
            this.isEmpty = false; 
            this.isBoiled = false;
        }
    }

    public getIsEmpty() {
        return this.isEmpty;
    }

    public getIsBoiled() {
        return this.isBoiled;
    }
}