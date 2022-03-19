# Bridge Design Pattern (Double Adapter Pattern)

Bridge is a structural design pattern that lets you split a large
class or a set of closely related classes into two separate
hierarchies—abstraction and implementation—which can be
developed independently of each other.

The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.

An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).

The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/bridge/src/images/pattern_bridge.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/bridge/src/images/pattern_bridge_1.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/bridge/src/images/pattern_bridge_2.JPG?raw=true)
