export class QNode {
    value: string;
    next: QNode | null;
    
    constructor(value: string) {
        this.value = value;
        this.next = null;
    }
}