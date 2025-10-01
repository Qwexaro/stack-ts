import { QNode } from "../q-node/Qnode.ts";

export class Queue {
    head: QNode | null;
    tail: QNode | null;
    countPeople: number;
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.countPeople = 0;
    }

    enqueue(value: string): void {
        const node = new QNode(value);
        if(!this.tail) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.countPeople++;
    }

    serve(): string | undefined {
        if(!this.head) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;

        if(!this.head) {
            this.tail = null;
        }
        this.countPeople--;
        
        return value;
    }

}