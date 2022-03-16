# Render Props Design Pattern

Pass JSX elements to components through props

A render prop is a prop on a component, which value is a
function that returns a JSX element. The component itself does not render
anything besides the render prop. Instead, the component simply calls the
render prop, instead of implementing its own rendering logic.

The cool thing about render props, is that the
component that receives the prop is very reusable. We can use it multiple
times, passing different values to the render prop each time.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/master/src/images/test.jpg?raw=true)
