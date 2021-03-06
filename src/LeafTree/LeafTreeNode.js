const { isNull } = require('../util/')

class Node {
  constructor(key, left, right) {
    this.reset(key, left, right)
  }

  reset(key = null, left = null, right = null) {
    this.key = key
    this.left = left
    this.right = right
    this.height = 0
  }

  static isNode(val) {
    return val instanceof Node
  }

  isLeaf() {
    return isNull(this._right)
  }

  get left() {
    return this.isLeaf() ? null : this._left
  }

  set left(val) {
    this._left = val
  }

  get value() {
    return this.isLeaf() || !Node.isNode(this._left) ? this._left : null
  }

  get right() {
    return this._right
  }

  set right(val) {
    if (Node.isNode(val) || isNull(val))
      this._right = val
    else
      throw new Error(Node.prototype.messages.invalidAssignmentOfRightChild)
  }

  isEmpty() {
    return isNull(this._left)
  }
}

Node.prototype.messages = {
  invalidAssignmentOfRightChild: '.right= must assign another node object'
}

module.exports = Node
