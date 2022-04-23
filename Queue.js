class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    if (this.items === 0) {
      return "No Item For Delete!";
    }
    return this.items.shift();
  }
  peek() {
    if (this.items === 0) {
      //   return "Queue is empty!";
      throw new Error("Queue is empty!");
    }
    return this.items[0];
  }
  length() {
    return this.items.length;
  }
}
const Q = new Queue();
Q.enqueue(10);
Q.enqueue(20);
Q.enqueue(30);
console.log("Deleted Item:", Q.dequeue());
console.log("Top Value", Q.peek());
console.log("Length", Q.length());
console.log(Q);
