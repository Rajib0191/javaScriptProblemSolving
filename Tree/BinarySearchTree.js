class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value === currentNode.value) return undefined;
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            return this;
          } else {
            currentNode = currentNode.left;
          }
        } else if (value > currentNode.value) {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            return this;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let currentNode = this.root;
    let found = false;

    while (currentNode && !found) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return currentNode;
  }

  BFS() {
    let queue = [];
    let data = [];
    queue.push(this.root);
    while (queue.length) {
      let node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;
    function helperFunction(node) {
      data.push(node.value);
      if (node.left) helperFunction(node.left);
      if (node.right) helperFunction(node.right);
    }
    helperFunction(current);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    let current = this.root;
    function helperFunction(node) {
      if (node.left) helperFunction(node.left);
      if (node.right) helperFunction(node.right);
      data.push(node.value);
    }
    helperFunction(current);
    return data;
  }

  DFSInlineOrder() {
    let data = [];
    let current = this.root;
    function helperFunction(node) {
      if (node.left) helperFunction(node.left);
      data.push(node.value);
      if (node.right) helperFunction(node.right);
    }
    helperFunction(current);
    return data;
  }

  Depth() {
    let current = this.root;
    function helper(root) {
      if (!root) return 0;
      let lDepth = helper(root.left);
      let RDepth = helper(root.right);
      return Math.max(lDepth, RDepth) + 1;
    }
    return helper(current);
  }

  MinDiff() {
    let prevNode = null;
    let minDiff = Infinity;

    function inOrderTraversal(node) {
      if (node === null) {
        return;
      }
      inOrderTraversal(node.left);
      if (prevNode !== null) {
        minDiff = Math.min(minDiff, node.val - prevNode.val);
        console.log(minDiff);
      }
      prevNode = node;
      inOrderTraversal(node.right);
    }
    inOrderTraversal(this.root);
    return minDiff;
  }
}

let tree = new BinarySearchTree();
// =========================================
tree.insert(10);
tree.insert(5);
tree.insert(3);
// tree.insert(4);
// tree.insert(8);
// tree.insert(1);
// tree.insert(13);
// tree.insert(12);
// tree.insert(15);
// =======================
// console.log(tree.find(10));
// =============================
// console.log("BFS:", tree.BFS());
// console.log("DFS-PreOrder:", tree.DFSPreOrder());
// console.log("DFS-PostOrder:", tree.DFSPostOrder());
// console.log("DFS-InlineOrder:", tree.DFSInlineOrder());
// =====================================================
// console.log("Depth:", tree.Depth());
// ==============================================
console.log("MinDiff:", tree.MinDiff());

console.log(tree);
