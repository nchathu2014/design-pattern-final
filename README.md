# Iterator Design Pattern Final

Iterator is a behavioral design pattern that lets you traverse
elements of a collection without exposing its underlying
representation (list, stack, tree, etc.).

The Iterator object maintains a reference to the collection and the current position. It also implements the 'standard' Iterator interface with methods like: first, next, hasNext, reset, and each.

Two looping methods are used: a built-in for loop and a newly created each method. The for loop uses the first, hasNext, and next methods to control the iteration. The each method does internally exactly the same (i.e. runs a for loop), but to the client the syntax has been greatly simplified.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/iterator/src/images/iterator_pattern.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/iterator/src/images/iterator_pattern_1.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/iterator/src/images/iterator_pattern_2.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/iterator/src/images/iterator_pattern_3.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/iterator/src/images/iterator_pattern_4.JPG?raw=true)
