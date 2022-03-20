# Intepreter Design Pattern

https://www.rapidtables.com/math/symbols/roman_numerals.html

0 - not define
1 - I
5 - V
10 - X
50 - L
100 - C
500 - D
1000 - M

The Interpreter pattern offers a scripting language that allows end-users to customize their solution.

Some applications are so complex that they require advanced configuration. You could offer a basic scripting language which allows the end-user to manipulate your application through simple instructions. The Interpreter pattern solves this particular problem – that of creating a simple scripting language.

Certain types of problems lend themselves to be characterized by a language. This language describes the problem domain which should be well-understood and well-defined. To implement this you need to map the language to a grammar. Grammars are usually hierarchical tree-like structures that step through multiple levels and then end up with terminal nodes (also called literals).

Problems like this, expressed as a grammar, can be implemented using the Interpreter design pattern.

Today, if you really need this type of control in JavaScript it is probably easier to use a code generator like ANTLR which will allow you to build your own command interpreters based on a grammar that you provide.

The objective of this example is to build an interpreter which translates roman numerals to decimal numbers: for example, XXXVI = 36.

The Context object maintains the input (the roman numeral) and the resulting output as it is being parsed and interpreted. The Expression object represents the nodes in the grammar tree; it supports the interpret method.

When running the program, a simple grammar tree is being built which then processes a roman numeral and translates it into a numeric.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/interpreter/src/images/interpreter_pattern.JPG?raw=true)
