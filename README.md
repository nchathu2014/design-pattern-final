# Core JavaScript

## Questions:

1.  How and who executes Javascript?
2.  Which language is Javascript written in? How come Javascript works in Browser without Downloading?
3.  What makes Javascript same in All Browsers?
4.  Can we download Javascript ?
5.  Data types in Javascript?
6.  What is a Object in Javascript? Is Everything a Object in Javascript?
7.  Is Function,Array a object in Javascript?
8.  Why Function are called as "function Objects"?
9.  Is Javascript Single Threaded or multi Threaded?
10. What is Execution Context?
11. What are the stages in Execution Context?
12. What is Hoisting?
13. What is the answer for this?
14. What are scopes in Javascript?
15. Difference between let vs var vs const?
16. What are the Scopes available in Javascript?
17. Is "Block Scope" supported natively in Javascript?
18. Can be sure whether setTimeout will call in the provided time?
19. What is Event Loop?
20. How come Nodejs said to be faster to other languages?
21. What is the order in which event gets Printed ? and Why?
22. what is Closure ?
23. How to implement private in Javascript?
24. What is asynchronous in Javascript? Why it is important?
25. What ways to handle asynchronous in Javascript?
26. what is callbacks and why for it used?
27. What is the drawbacks of callback?
28. What makes promise better than Callbacks?
29. What is a constructor in Javascript?
30. Is inheritance possible in Javascript ? If yes what type is possible?
31. What is protypical inheritance?
32. Does all the childs share the same copy of the Parent?

## Answers:

### 5. Data types in Javascript?

    JavaScript is Dynamically type language. In JS all are Objects. constructed from 'Object()'

- Value Type (Primitive) and Reference Type
  Value Type (Primitive): Number, String, Boolean, Symbol, null (No value or Non-existance), undefined (Assign By the JS Engine)
  Reference Type: Object (Key-Value Pairs), Array, Function

  let c; typeof c=> 'undefined'
  let a = null; typeof a => "object"

  ### 6. What is a Object in Javascript? Is Everything a Object in Javascript?

  Object is a Key-Value pair in JavaScript.

  ```
  const name = {
      name:"Nuwan",
      age:34,
      isStamped:true
      getInfo(){
          return `${this.name}-${this.age}-${this.isStamped}`
      }
  }
  ```

  EXCEPT some primitives(number,string,boolean,undefined), others all are Objects

### 9. Is Javascript Single Threaded or multi Threaded?

    JavaScript is Single Threaded(main Thread) with a Single Stack. The principle about JavaScript is 'DONT BLOCK the MAIN Thread". To do that we have to
    write asynchronous codes using CALLBACKS, PROMISES, OBSERVABLES (Advanced way of handling Promises).

### 10. What is Execution Context?

    Execution Context is teh environment in which code is run. By means of Execution Context is
    1-'this' reference
    2- global value (if a browser it will be 'window')
    3- Reference to outer enviornment

Global Execution Context (GEC) is created when file is called. Then for each function, seperate Execution Contect will be created in the call-stack

There are two Phases in Execution Context.
Phase 1: Creation Phase (Hoisting happens in this phase)
Memory gets created, variables get a default value of undefined
Phase 2: Execution Phase
JE Engine executes line by line

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/CORE/js/src/images/gec.JPG?raw=true)

### 11. What are the stages in Execution Context?

Creation Phase (Memory creation) and Execution Phase

### 12. What is Hoisting?

Hoisiting is a term which use to uplift, moves up the declaration

### 13. What is the answer for this?

### 14. What are scopes in Javascript?

### ### 15. Difference between let vs var vs const?

### 16. What are the Scopes available in Javascript?

Scope refers to the area where an item (such as a function or variable) is visible and accessible to other code.

Scope means area, space, or region.

There are 3 major scope types as,

Global scope means global space or a public space.
Local scope (Functional scope) means a local region or a restricted region.
Block Scope means region is limited to the block

Lexcial Scope (Static Scope):
Lexical scope is the definition area of an expression.
NOT THE EXECUTION SCOPE (It might be Global or Local)

var - Functional scope variable (If the varible is not available in the functional scope, then it will search the next upper level scope until to the global scope-this called the scope chanining)
let & const = BLOCK SCOPE variables

### 17. Is "Block Scope" supported natively in Javascript?

ES5 is not supported, but ES6 supported

### 18. Can be sure whether setTimeout will call in the provided time?

### 19. What is Event Loop?

### 20. How come Nodejs said to be faster to other languages?

### 21. What is the order in which event gets Printed ? and Why?

### 22. what is Closure ?

Clouser is access to the context in which it was created (Lexical scope) even after though it is return.

### 23. How to implement private in Javascript?

Using closures we can declare private members

### 24. What is asynchronous in Javascript? Why it is important?

### 25. What ways to handle asynchronous in Javascript?

### 26. what is callbacks and why for it used?

### 27. What is the drawbacks of callback?

### 28. What makes promise better than Callbacks?

### 29. What is a constructor in Javascript?

### 30. Is inheritance possible in Javascript ? If yes what type is possible?

### 31. What is protypical inheritance?

### 32. Does all the childs share the same copy of the Parent?
