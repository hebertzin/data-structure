class Queue {
  constructor() {
    this.items = [];
  }

  add(element) {
    this.items.push(element);
  }

  remove() {
    return this.items.pop();
  }

  peek() {
    const element = this.items[this.items.length - 1];

    return element;
  }

  isEmpty() {
    return this.items.length == 0 ? true : false;
  }

  clear() {
    this.items = [];
  }

  show() {
    const itens = this.items;

    return {
      itens,
    };
  }
}

const queue = new Queue();

queue.add(20);
queue.add(40);
queue.add(49);
queue.add(55);

const lastElementInQueue = queue.peek();

const allItemsInQueue = queue.show().itens;

console.log(
  `items : [${allItemsInQueue}], last element : ${lastElementInQueue}`
);
