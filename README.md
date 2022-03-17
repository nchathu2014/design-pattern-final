# HOC Design Pattern

Pass reusable logic down as props to components throughout your
application

Within our application, we often want to use the same logic in multiple
components. This logic can include applying a certain styling to components,
requiring authorization, or adding a global state.
One way of being able to reuse the same logic in multiple components, is by
using the higher order component pattern. This pattern allows us to reuse
component logic throughout our application.
A Higher Order Component (HOC) is a component that receives another
component. The HOC contains certain logic that we want to apply to the
component that we pass as a parameter. After applying that logic, the HOC
returns the element with the additional logic.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/hoc/src/images/hoc_pattern.JPG?raw=true)
