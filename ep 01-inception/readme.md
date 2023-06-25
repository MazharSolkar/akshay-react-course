# react

the React library provides the core functionality for building user interfaces using components and managing application state.

# react-dom

while the React DOM library handles the rendering of React components into the browser DOM, ensuring efficient updates and synchronization between the virtual DOM and the actual DOM.

# Hello World using javascript

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>

    <div id="root"></div>

    <script>
      const heading = document.createElement('h1');
      heading.innerHTML = 'Hello World! using javascript';
      const root = document.getElementById('root');
      root.appendChild(heading);
    </script>

  </body>
</html>

root.render(parent);
```

# Injecting react in our app using **cdn** and Hello World using react

```HTML
<html lang="en">
  <head>
    <title>ep 01-igniting our app</title>
  </head>
  <body>
    <h1>I'm above root element</h1>
    <div id="root">
        <h1>I'm inside root element</h1>
    </div>
    <h1>I'm below root element</h1>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script>
      const heading = React.createElement('h1', { id: 'heading', class: 'giant' },'Hello World!');
      console.log(heading);

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(heading);
    </script>

  </body>
</html>
```

## **NOTE**

- **_React.createElement =_** creates react element which is an object, that will be coverted into html later on.
- **_{} =_** this object is used to give attributes like class, id etc.
- **_console.log(heading) =_** will return object(which is react element).
- **_root.render() =_** convert object(which is react element) into htlm element and puts it into dom.

- if i have any element inside root element that will be replaced by the elements i'm rendering through root.render() method.
- if i have any element above or below the root element they will be displayed as it as, because react is applied to only that spefice element having root id.
- **_this proves that we can use react at specific place in our code._** which is not possible in some of the frameworks they require us to create entrie app using that framework.

# Creating HTML Structure Using React

### index.html

```HTML
<html lang="en">
  <body>
    <div id="root"></div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script src="./App.js"></script>
  </body>
</html>
```

### App.js

```javascript
/*
<div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tage</h2>
    </div>
</div>
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement(
    'div',
    { id: 'child1' },
    React.createElement('h1', {}, "I'm h1 tag")
  ),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 tag"),
    React.createElement('h2', {}, "I'm h2 tag"),
  ]),
]);

root.render(parent);
```

## **NOTE**

- To avoid this complex structure there is alternative in react which is jsx.
