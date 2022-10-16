const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {


  root() {

    if (this.data === null || this.data === undefined) {
      return null
    } else {
      return this.data
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

  }

  add(data) {

    this.data = addNew(this.data, data);

    function addNew (node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node
      }
      if (data < node.data) {
        node.left = addNew(node.left, data);
      } else {
        node.right = addNew(node.right, data);
      }
      return node;
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  has(data) {

    return hasNode(this.data, data)

    function hasNode (node, data) {

      if (!node) {return false};

      if (node.data === data) {return true};

      return node.data > data ? hasNode(node.left, data) : hasNode(node.right, data);

    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(data) {

    return findNode(this.data, data)

    function findNode (node, data) {

      if (!node) {return null};

      if (node.data === data) {return node};

      return node.data > data ? findNode(node.left, data) : findNode(node.right, data);

    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {

    this.data = deleteNode(this.data, data);

    function deleteNode (node, data) {
      if(!node) {
        return null;
      }

      if (data < node.data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = deleteNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRigth = node.right;
        while (minRigth.left) {
          minRigth = minRigth.left
        }
        node.data = minRigth.data;
        node.right = deleteNode(node.right, minRigth.data);

        return node;
      }
    }

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {

    let node = this.data;
    while (node.left) {
      node = node.left
    }

    return node.data

    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {

    let node = this.data;
    while (node.right) {
      node = node.right
    }

    return node.data
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};