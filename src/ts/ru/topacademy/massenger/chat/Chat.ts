import { Deque } from "../deque/Deque.ts";

export class Chat {
    private messages: Deque;
    private maxSize: number;

    constructor(maxSize: number) {
        this.messages = new Deque();
        this.maxSize = maxSize;
    }

    addMessage(msg: string): void {
        this.messages.pushBack(msg);

        const currentSize = this.messages.backIndex - this.messages.frontIndex + 1;
        if (currentSize > this.maxSize) {
            this.messages.popFront();
        }
    }

    getHistory(): string[] {
        const result: string[] = [];
        
        for (let i = this.messages.frontIndex; i <= this.messages.backIndex; i++) {
            if (this.messages.items[i] !== undefined) {
                result.push(this.messages.items[i]);
            }
        }
        return result;
    }
}