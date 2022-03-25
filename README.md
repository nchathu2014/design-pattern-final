# Software Design Principles - SOLID

L - Liskov Subtitution Principle

When extending a class, remember that you should be
able to pass objects of the subclass in place of objects of
the parent class without breaking the client code.

This means that the subclass should remain compatible with
the behavior of the superclass. When overriding a method,
extend the base behavior rather than replacing it with something
else entirely.

The substitution principle is a set of checks that help predict
whether a subclass remains compatible with the code that
was able to work with objects of the superclass. This concept
is critical when developing libraries and frameworks because
your classes are going to be used by other people whose code
you can’t directly access and change.

Liskov Subtitution:
if Dog is a Sub class of Animal. It should be able to subtitute
Animal with the Dog. Then all Animal code will be replaced with Dog and program will work as expected

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/SOLID/liskov-subtitution-principle/src/images/liskov.JPG?raw=true)

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/SOLID/liskov-subtitution-principle/src/images/liskov_1.JPG?raw=true)
