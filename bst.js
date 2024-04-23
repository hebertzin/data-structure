class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearch {
  constructor() {
    this.root = null;
  }

  search(value) {
    return this._searchHelper(this.root, value);
  }

  _searchHelper(node, value) {
    if (node === null) {
      return false;
    }

    if (node.value === value) {
      return true;
    }

    if (value < node.value) {
      return this._searchHelper(node.left, value);
    } else {
      return this._searchHelper(node.right, value);
    }
  }
}

const tree = new BinarySearch();

tree.root = new Node(20);
tree.root.left = new Node(4);
tree.root.right = new Node(15);
tree.root.right.right = new Node(150);

console.log(tree.search(150)); // output : true
