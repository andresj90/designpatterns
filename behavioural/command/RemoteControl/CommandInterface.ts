
/**
 * all command objects implement the same interface, which
consists of one method.
 */
export interface ICommand{
    execute: () => void;
}