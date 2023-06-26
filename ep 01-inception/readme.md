## Hello World using HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <body>
    <h1>Hello World!</h1>

  </body>
</html>

root.render(parent);
```

## Hello World using javascript

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

## Injecting react in our app using **cdn** and Hello World using react

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

## Creating HTML Structure Using React

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

### **NOTE**

- To avoid this complex structure there is alternative in react which is jsx.

## THEORY

## What is Emmet?

It allows developers to write shorthand abbreviations that expand into complete HTML or CSS code snippets.

## Difference between a library and framework?

- A library is a collection of pre-written code that provides specific functionalities and can be used to enhance the development process. Developers can selectively use libraries to add specific features to their applications.
- A framework is a comprehensive software platform that provides a foundation and a set of tools for building applications. It offers a structured environment with predefined rules, conventions, and integrated features to streamline the development process.
- While libraries are used to add specific functionalities(e.g. react and react dom), frameworks provide a complete solution and dictate the overall architecture and flow of the application.
- You can use libraries like react and jquery for only specific part of your application, but it is not possible with most of the frameworks. You need to create entire application using framework.

## What is CDN? Why do we use it?

A content delivery network (CDN) is a group of servers spread across different geographical locations worldwide to enable the quick delivery of a website’s content. It is also known as a content distribution network.

https://www.hostinger.in/tutorials/what-is-cdn

## Why is React Known as React?

- The name "React" reflects the central concept of the react library
  i.e. reacting to state changes and efficiently updating the UI in response.
- The reactive nature is achieved through virtual DOM.
- virtual DOM creates a virtual representation of the UI based on the current application state.
- When the state changes, React calculates the differences between the previous and new virtual DOM and updates only the necessary parts of the actual DOM.
  This process is commonly referred to as "reconciliation" or "diffing."

## What is cross-origin in the script tag?

### CORS (Cross Origin Resource Sharing)

- CORS is a security mechanism that allows resource sharing across different origins(domains).
- The same-origin policy is a default security measure that restricts web pages from making requests to different domains. However, CORS provides a way to relax this restriction selectively.
- CORS works through a mechanism of preflight and actual requests:

  - Preflight Request: Before sending the actual request, the browser may send a preflight request with the HTTP method "OPTIONS" to check if the server allows the actual request. The preflight request includes headers such as "Origin" and "Access-Control-Request-Method", which inform the server about the intent of the actual request.

  - Access-Control-Allow-Origin: The server responds to the preflight request with the "Access-Control-Allow-Origin" header, which specifies the domains allowed to access the requested resource. If the requesting domain is in the allowed list, the browser proceeds with the actual request. Otherwise, it may block the request due to the same-origin policy.

  - Actual Request: If the preflight request is successful, the browser sends the actual request, including the necessary data and headers. The server responds to this actual request as it normally would.

  - chatgpt (for example)

- crossorigin
  The crossorigin attribute in a script tag specifies how the browser handles cross-origin requests for the script file.

  - The crossorigin attribute can have three values:

    - anonymous: The browser will send a CORS request, but will not send any credentials, such as cookies or authentication tokens. This is the default value.
    - use-credentials: The browser will send a CORS request, and will send credentials, if the server allows it.
    - null: The browser will not send a CORS request. This is the same as omitting the crossorigin attribute altogether.

## What is the difference between React and React DOM

- the React library provides the core functionality for building user interfaces using components, virtual DOM and managing application state.
- while the React DOM library handles the rendering of React components into the browser DOM, ensuring efficient updates and synchronization between the virtual DOM and the actual DOM.

## What is difference between react.development.js and react.production.js files via CDN?

**react.development.js**

- It is for development purpose.
- It include debugging tools, such as error messages, warnings, and development-specific features.

**react.production.js**

- This file is optimized for production environments.
- It is smaller in size because it omits the debugging information and development tools present in the development version. By using react.production.js, you will achieve better performance and reduced file size for your production application.
- It is advisable to switch to this file when deploying your application to a live production environment.

## What are async and defer?

https://www.section.io/engineering-education/understanding-script-tag-attributes-async-defer/
When you open a webpage there are two things happening

1. HTML parsing
2. Loading of script

- there are two parts in script loading

  1. fetching the script from network
  2. executing the script line by line

- There are three ways to load script

  1. without any attribute

  ````HTML
  <script src="script.js"></script>```

    - when the script tag is encountered HTML parsing is stopped.
    - then script is fetched and executed.
    - after that HTML parsing is resumed.

  2. with async attribute
  ```HTML
  <script src="script.js" async></script>```

    - when the script tag is encountered HTML parsing is not stopped.
    - script is fetched parallelly with HTML parsing.
    - once script is fetched and HTML parsing is stopped, and script is executed.
    - after script execution HTML parsing is resumed.
    - It is good for loading script that are not dependent on other, script which fetched first will be executed first there is no order followed.

  3. with defer attribute
  ```HTML
  <script src="script.js" defer></script>```

    - when script tag is encountered HTML parsing is not stopped.
    - script is fetched parallelly with HTML parsing.
    - once the HTML parsing is done all fetched scripts are executed.
    - It is food for loading scripts that are dependent on one another, and order is required. defer follows order.
  ````

# CODING

- set up all the tools on your laptop

  - vs code
  - chrome

- create a new git repo

- Build your first Hello world program using,

  - Using just HTML
  - Using JS to manipulate the DOM
  - Using React

- Use CDN links

- Create an element

- Create nested React Elements

- Use root.render

- Push code to github

- Learn about arrow functions before the next class
