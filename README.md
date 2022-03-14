# Container/ Presentational Design Pattern

Enforce separation of concerns by separating the view from the application logic.

In React, one way to enforce separation of concerns is by using
the Container/Presentational pattern. With this pattern, we can separate the
view from the application logic.
Let's say we want to create an application that fetches 6 dog images, and
renders these images on the screen. Ideally, we want to enforce separation of
concerns by separating this process into two parts:

1. Presentational Components: Components that care about how data is
   shown to the user. In this example, that's the rendering the list of dog
   images.
2. Container Components: Components that care about what data is shown
   to the user.

![alt text](https://github.com/nchathu2014/design-pattern-final/blob/pattern/container_presentational/src/images/container_presentational_pattern.JPG?raw=true)
