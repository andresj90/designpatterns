export class Singleton {
    private instance: Singleton | null = null;

    private constructor() {}

    public static getInstance(): Singleton {
        if (!this.prototype.instance) {
            this.prototype.instance = new Singleton();
        }

        return this.prototype.instance;
    }
}


