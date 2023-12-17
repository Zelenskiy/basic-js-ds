const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._insertNode(this.rootNode, data);
  }

  _insertNode(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._insertNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this._searchNode(this.rootNode, data) !== null;
  }

  _searchNode(node, data) {
    if (node === null || node.data === data) {
      return node;
    }

    if (data < node.data) {
      return this._searchNode(node.left, data);
    } else {
      return this._searchNode(node.right, data);
    }
  }

  find(data) {
    const foundNode = this._searchNode(this.rootNode, data);
    return foundNode ? foundNode.data : undefined; 
  }


  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);
  }

  _removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      node.data = this._minValueNode(node.right).data;

      node.right = this._removeNode(node.right, node.data);
    }

    return node;
  }

  _minValueNode(node) {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  min() {
    const minNode = this._minValueNode(this.rootNode);
    return minNode ? minNode.data : null;
  }

  _maxValueNode(node) {
    let current = node;
    while (current.right !== null) {
      current = current.right;
    }
    return current;
  }

  max() {
    const maxNode = this._maxValueNode(this.rootNode);
    return maxNode ? maxNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};