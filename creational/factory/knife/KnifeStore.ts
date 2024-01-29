export abstract class KnifeStore {
    abstract createKnife(type: string):KnifeStore | null;
}