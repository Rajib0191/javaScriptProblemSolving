class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   Insert Value Last
  push(val) {
    let lastNode = new Node(val);
    if (this.head === null) {
      this.head = lastNode;
      this.tail = this.head;
    } else {
      this.tail.next = lastNode;
      this.tail = lastNode;
    }
    this.length++;
  }

  //   Pooping value from last
  pop() {
    if (this.head === null) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // console.log("Current:", current.val, "New Tail:", newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  // Add Value Beginning In The Linked List
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Remove Value Beginning In The Linked List
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
  }

  // Get Specific Index Value
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  // Set A Value Into a Specific Index
  set(value, index) {
    let targetNode = this.get(index);
    if (targetNode) {
      targetNode.val = value;
      return true;
    } else {
      return false;
    }
  }

  // Insert Value Specific Position
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return this.push(val);
    }
    if (index === 0) {
      return this.unshift(val);
    }
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  // Print All Data
  PrintData() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

let list = new LinkedList();
// Insert Value Into The Last Of The List
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
list.push(60);
list.push(70);

// Delete Value From The List End
// list.pop();
// list.pop();

// Add Value Beginning In The Linked List
// list.unshift(5);
// list.unshift(1);

// Remove Value Beginning In The Linked List
// list.shift();
// list.shift();

// Insert A Value Into Specific Position
// list.insert(1000, 7);
// list.insert(2000, 0);
// list.insert(2500, 3);

// Remove A Value Into Specific Position
// console.log(list.remove(1));
// console.log(list.remove(8));

// Set a Value into Specific Index
// console.log(list.set(5, 1));

// Get Specific Index Value
// console.log(list.get(3));

// Print Data
list.PrintData();

// Show All List
console.log(list);
