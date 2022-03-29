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

5.  Data types in Javascript?
    JavaScript is Dynamically type language. In JS all are Objects. constructed from 'Object()'

- Value Type (Primitive) and Reference Type
  Value Type (Primitive): Number, String, Boolean, Symbol, null (No value or Non-existance), undefined (Assign By the JS Engine)
  Reference Type: Object (Key-Value Pairs), Array, Function

  let c; typeof c=> 'undefined'
  let a = null; typeof a => "object"

9.  Is Javascript Single Threaded or multi Threaded?
    JavaScript is Single Threaded(main Thread) with a Single Stack. The principle about JavaScript is 'DONT BLOCK the MAIN Thread". To do that we have to
    write asynchronous codes using CALLBACKS, PROMISES, OBSERVABLES (Advanced way of handling Promises).

10. What is Execution Context?
    Execution Context is teh environment in which code is run. By means of Execution Context is
    1-'this' reference
    2- global value (if a browser it will be 'window')
    3- Reference to outer enviornment

Global Execution Context (GEC) is created when file is called. Then for each function, seperate Execution Contect will be created in the call-stack

There are two Phases in Execution Context.
Phase 1: Creation Phase
Memory gets created, variables get a default value of undefined
Phase 2: Execution Phase (Hoisting happens in this phase)
JE Engine executes line by line

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/CORE/js/src/images/gec.JPG?raw=true)
