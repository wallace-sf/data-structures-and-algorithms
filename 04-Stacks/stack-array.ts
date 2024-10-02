const kItems = Symbol('items');
const kSize = Symbol('size');

class Stack<T> {
  private [kItems]: T[] = [];
  private [kSize]: number;
  constructor() {
    this[kItems] = [];
    this[kSize] = 0;
  }

  public get peek(): T | undefined {
    return this[kItems][this[kSize] - 1];
  }

  public pop(): T | undefined {
    const removed = this[kItems].pop();

    this[kSize]--;

    return removed;
  }

  public push(item: T) {
    this[kItems].push(item);
    this[kSize]++;
  }

  public clear() {
    this[kItems] = [];
    this[kSize] = 0;
  }

  public get isEmpty() {
    return this.size === 0;
  }

  public get size() {
    return this[kSize];
  }
}

const stack = new Stack<number>();

console.log(stack);
console.log(stack.size);

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(2020);

console.log(stack);
console.log(stack.peek);
console.log(stack.size);
console.log(stack.isEmpty);

console.log(stack.pop());
console.log(stack);

stack.clear();
console.log(stack);
