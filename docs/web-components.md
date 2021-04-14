# Components

## Thinking in components.

### Introduction

The next article explains how the components work in the React world, even if we are working with Vue, it is very valuable to change our thinking about components and start thinking in the React way. (Vue is based on React). Please read this introduction: [Thinking in react](https://facebook.github.io/react/docs/thinking-in-react.html)

### State

A component is like a state machine that represents an user interface. Every user action potentially triggers a change in that state machine. Then, the new state is represented by a different element.

So every time the "state" changes(data of the component) the UI should change, doing this on vue is really easy, because it automatically changes the UI based on the component's data.

### Categories

Basically there are two types of components:

#### Dumb Components:

Also called _Presentational_, _Pure_ or _Stateless_ components. Key points:

- The main purpose is presentational, show the provided data via props to the user. **How things look.**
- Provides an interface or props values.
- Pure, same input props values, will always return the same UI representation.
- Single Responsability Principle.
- Doesn't have logic or business rules.
- Can contain other dumb components inside.

Examples:

- Button
- List
- Input

#### Smart components:

Also called _Container_, _Root_ or _Statefull_ components. Key points:

- Their main concern is about **How things work**
- Contains dumb or smart components inside.
- Provide the data and behavior(logic and business rules) to dumb or other smart components.

If you want to know more about how the components are categorized please read:

- [Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.azebigcm7)
- [Container Components](https://medium.com/@learnreact/container-components-c0e67432e005#.dlppsnayb)

#### Why?

- Separation of concerns: breaking down the common design elements (buttons, form fields, layout components, etc.) into reusable components will increase our development time.
- Reusability. You can use the same dumb component on different smart components.
- Testability, components with SRP are easier to test.

## Communication in complex UI

If the UI is too complex, consider using one of these techniques depending on the difficulty

### Flux

It is an architecture pattern created by Facebook to use a unidirectional data flow, like React and Vue, on complex UI.

Please check these links:

- [Basic Flux definition](https://carlosazaustre.es/como-funciona-flux) if it's possible check the video.
- [Flux overview](https://facebook.github.io/flux/docs/overview.html#content) if it's possible check the video.
- [Flux tutorial](http://blog.andrewray.me/flux-for-stupid-people/)

### Redux:

Redux is a predictable state container for JavaScript apps.

- First learn what is Redux about: [Redux](http://redux.js.org/)
- Why Redux?: [Motivation](http://redux.js.org/docs/introduction/Motivation.html) [Principles](http://redux.js.org/docs/introduction/ThreePrinciples.html)
