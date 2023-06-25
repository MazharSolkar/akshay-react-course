# react

the React library provides the core functionality for building user interfaces using components and managing application state.

# react-dom

while the React DOM library handles the rendering of React components into the browser DOM, ensuring efficient updates and synchronization between the virtual DOM and the actual DOM.

```javascript
const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child1' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h1', {}, "I'm h1 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h1', {}, "I'm h1 tag"),
  ]),
]);

root.render(parent);
```
