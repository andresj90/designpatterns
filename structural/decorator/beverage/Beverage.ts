import {Size} from './types'

export abstract class Beverage {
    protected _description: string = "Unknown Beverage";
    protected _cost: number = 0;
    protected _size: Size = "GRANDE"

   
    public get description(): string { return this._description; }
    public get cost(): number { return this._cost; }
    public set setSize(size: Size) { this._size = size; }
    public get size(): Size { return this._size; }
}