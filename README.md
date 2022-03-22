# Software Design Principles - SOLID

O - Open/ Closed Principle
Classes should be open for extenstion but closed for modification

The main idea of this principle is to keep existing code from
breaking when you implement new features.

This principle isn’t meant to be applied for all changes to a
class. If you know that there’s a bug in the class, just go on and
fix it; don’t create a subclass for it. A child class shouldn’t be
responsible for the parent’s issues.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/SOLID/open-closed-principle/src/images/open_closed_principle.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/SOLID/open-closed-principle/src/images/open_closed_principle_1.JPG?raw=true)
