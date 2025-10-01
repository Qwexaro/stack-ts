export class Deque {
    items: {[key: number]: string};
    frontIndex: number;
    backIndex: number;
    
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = -1;
    }


    pushFront(item: string): void {
        this.frontIndex--;
        this.items[this.frontIndex] = item;
    }


    pushBack(item: string): void {
        this.backIndex++;
        this.items[this.backIndex] = item;
    }

    popFront() {
      if (this.isEmpty()) return undefined;
      const item = this.items[this.frontIndex];
      delete this.items[this.frontIndex];
      this.frontIndex++;
      return item;
    }

    popBack() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.backIndex];
        delete this.items[this.backIndex];
        this.backIndex--;
        return item;
    }

  
    isEmpty(): boolean {
        return this.backIndex < this.frontIndex;
    }
}