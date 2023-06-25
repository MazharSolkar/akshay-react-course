# react

the React library provides the core functionality for building user interfaces using components and managing application state.

# react-dom

while the React DOM library handles the rendering of React components into the browser DOM, ensuring efficient updates and synchronization between the virtual DOM and the actual DOM.

# Hello World using javascript

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ep 01-igniting our app</title>
  </head>
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

root.render(parent);\
```
