class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  remove() {}

  getChild() {}

  hasChildren() {}
}
