/**
 * The datastore function represents the AbstractClass and mySql represents the ConcreteClass. mySql overrides the 3 template methods: connect, select, and disconnect with datastore-specific implementations.

The template methods allow the client to change datastore (SQL Server, Oracle, etc.) by adjusting (filling in the blanks) only the template methods. The rest, such as, the order of the steps, stays the same for any datastore.
 * 
 */

class Datastore {
  process() {
    this.connect();
    this.select();
    this.disconnect();
    return true;
  }

  connect() {
    console.log("Data Store => connect");
  }

  select() {
    console.log("Data Store => select");
  }

  disconnect() {
    console.log("Data Store => disconnect");
  }
}

/* const ds = new Datastore();
ds.connect();
ds.select();
ds.disconnect(); */

class MySQL extends Datastore {
  constructor(props) {
    super(props);
  }

  connect() {
    console.log("MySQL => connect");
  }

  select() {
    console.log("MySQL => select");
  }

  disconnect() {
    console.log("MySQL => disconnect");
  }
}

const mySql = new MySQL();

console.log(mySql.process());
