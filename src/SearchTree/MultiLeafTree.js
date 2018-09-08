const LeafTree = require('./LeafTree')
const LinkedList = require('../ch1/LinkedList')
const Node = require('./LeafTreeNode')

const initializeListWith = (val) => {
  const list = new LinkedList()
  list.insertLast(val)
  return list
}

const addToValueList = (node, val) => {
  const list = node.value
  list.insertLast(val)
}

class MultiLeafTree extends LeafTree {
  find(key) {
    const value = super.find(key)
    return value ? value.entries() : []
  }

  insert(key, val) {
    if (this.isEmpty()) this.root = new Node(key, initializeListWith(val))
    else {
      let current = this.root
      while (!current.isLeaf()) {
        current = (key < current.key) ? current.left : current.right
      }
      if (current.key === key) {
        addToValueList(current, val)
      }
      else {
        let oldLeaf = new Node(current.key, current.value)
        const newLeaf = new Node(key, initializeListWith(val))
        if (current.key < key) {
          current.left = oldLeaf
          current.right = newLeaf
          current.key = key
        } else {
          current.left = newLeaf
          current.right = oldLeaf
        }
      }
    }
  }

  delete(key) {
    const value = super.delete(key)
    return value ? value.entries() : []
  }
}

module.exports = MultiLeafTree
