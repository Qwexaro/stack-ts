export class Stack {
  private items: string[] = [];

  push(item: string): void {
    this.items.push(item);
  }

  pop(): string | undefined {
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}