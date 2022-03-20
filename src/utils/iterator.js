class Iterator {
  constructor(items, index = 0) {
    this.items = items;
    this.index = index;
  }

  reset() {
    this.index = 0;
  }

  next() {
    return this.items[this.index++];
  }

  hasNext() {
    return this.next() ? true : false;
  }

  first() {
    this.reset();
    return this.next();
  }

  each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

const items = ["one", 2, "circle", true, "Applepie"];
const itr = new Iterator(items);

console.log(itr.next());

console.log(itr.next());

console.log(itr.next());

console.log(itr.next());

console.log(itr.next());
console.log("HAS NEXT:", itr.hasNext());

itr.each((item) => console.log(item));
