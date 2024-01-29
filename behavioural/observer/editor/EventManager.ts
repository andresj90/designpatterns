import { IEventListener } from "./IEventListener";



export type EventType = "SAVE" | "OPEN"
export class EventManager {
    private listeners = new Map<EventType, Array<IEventListener>>();

    public subscribe(eventType: EventType, listener: IEventListener): void {
       const values = this.listeners.get(eventType)
       if (values) {
        values.push(listener)
        this.listeners.set(eventType, values); 
        console.log("New Suscription ", this.listeners)
       }else {
        this.listeners.set(eventType, [listener]); 
        console.log("New Suscription ", this.listeners)
       }
       
    }

    public unsubscribe(eventType: EventType, listener: IEventListener): void {
       const values = this.listeners.get(eventType); 
        if (values) {
            const newValue = values.filter(v => v !== listener);
            this.listeners.set(eventType, newValue); 
            console.log("Removed Suscription ", this.listeners)
            }
    }

    public notify(eventType: EventType, data: string) {
        const listeners = this.listeners.get(eventType);
        if (listeners) {
            listeners.forEach(listener => {
                listener.update(data)
            })
        }
    }

}