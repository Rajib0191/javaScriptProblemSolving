// const n1 = {
//   data: 100,
// };
// const n2 = {
//   data: 200,
// };
// n1.next = n2;
// console.log(n1);

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insert First Index
  InsertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  // Insert Last Index
  InsertLast(data) {
    let lastNode = new Node(data);
    if (this.head === null) {
      this.head = lastNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = lastNode;
    }
    this.size++;
  }

  // Insert At Index
  InsertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.InsertFirst(data);
    } else {
      let newNode = new Node(data);
      let current = this.head;
      let prev;
      let count = 0;
      while (count < index) {
        prev = current; //Node before index
        count++;
        current = current.next; //Node after index
      }
      prev.next = newNode;
      newNode.next = current;
    }
    this.size++;
  }

  // Get At Index
  GetAt(index) {
    let current = this.head;
    if (this.head === null) {
      return "No Data in LinkedList";
    }
    if (index > 0 && index > this.size) {
      return "Out of index";
    }
    if (index === 0) {
      return current.data;
    } else {
      let count = 0;
      while (count < index) {
        count++;
        current = current.next;
      }
    }
    return current.data;
  }

  // Remove At Index
  RemoveAt(index) {
    if (index > 0 && index > this.size) {
      return "Out of Index";
    }
    let current = this.head;
    let prev;
    let count = 0;
    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        prev = current;
        count++;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.size--;
  }

  // Clear List
  ClearList() {
    this.head = null;
    this.size = 0;
  }

  // Print All Data
  PrintData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const LL = new LinkedList();
LL.InsertFirst(100);
LL.InsertFirst(200);
// console.log(LL);
LL.InsertLast(300);
// console.log(LL);
LL.InsertAt(50, 0);
LL.InsertAt(400, 2);
LL.InsertAt(500, 4);
//After All Type of Insert
console.log("Search Data Is:", LL.GetAt(5));
LL.PrintData();
LL.RemoveAt(5);
// LL.ClearList();
console.log("-----------");
LL.PrintData();
console.log(LL);
