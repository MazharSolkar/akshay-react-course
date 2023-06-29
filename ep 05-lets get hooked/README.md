# THEORY

## What is the difference between **named export**, **default export** and **, \* export** ?

- Default Export
  allows to export single value.
  there can be only on default export per file.

```javascript
const greeting = 'Hello, World!';
export default greeting;
```

- Named Export
  allows us to export multiple values with named identifier.

```javascript
// Module A
export const foo = 'Hello';
export const bar = 'World';

// Module B
import { foo, bar } from './ModuleA';
console.log(foo); // Output: Hello
console.log(bar); // Output: World
```

- Wildcard export (\*)
  allows us to export all the named export in the file in on go.
  It creates a namespace-like object that contains all the exported values.

```javascript
// Module.js
export const foo = 'Hello';
export const bar = 'World';

export * from './Module'; // Re-export all values from the same module
```

## What is the importance of config.js file

config.js file is used to store configuration settings and constants that are used throught the application. (It is common convention followed by developers)

## What are React Hooks?

- hooks are normal JS functions provided by React. (utility functions).
- commonly used react hooks **useState()** and **useEffect()**.

## Why do we need a useState hook?

- useState is used to store dynamic data, which can change.
- we change state using setState function.
- When the state of component changes react re-render the component.
- updated virutal DOM of that component is created diffing compares the updated VDOM and previous VDOM to make only necessary changes to actual DOM.

# CODING

- Clean up your code
- Create a Folder Structure for your app
- Make different files for each Components
- Create a config file
- Use all types of import and export
- Create a search box in your app
- Use useState to create a variable and bind it to the input box
- Try to make your seach bar work
