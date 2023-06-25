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
    <div id="root">
        <h1>Hey there Everyone</h1>
    </div>

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

- **React.createElement =** creates react element which is an object, that will be coverted into html later on.
- **{} =** this object is used to give attributes like class, id etc.
- **console.log(heading) =** will return object(which is react element).
- **root.render() =** convert object(which is react element) into htlm element and puts it into dom.

- if i have any element inside root element that will be replaced by the elements i'm rendering through root.render() method.
- if i have any element above or below the root element they will be displayed as it as, because react is applied to only that spefice element having root id.
- this proves that we can use react at specific place in our code. which is not possible in some of the frameworks they require us to create entrie app using that framework.
