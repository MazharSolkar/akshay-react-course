# ASSIGNMENT 03 - Laying the foundation

# TOPICS

- JSX
- React.createElement vs JSX
- Benefits of JSX
- Behind the scenes of JSX
- Babel & parcel rol in JSX
- Components
- Functional Components
- Composing Components

# ASSIGNMENT

## What is JSX

- JSX is HTML like syntax.
- JSX provides syntactic sugar for React.createElement().
- React code is readable because of JSX.

## Superpowers of JSX

- JSX allows us to write write javascript code inside JSX. ({} inside curly braces you can write js)
- JSX prevents cross site scripting.
- JSX helps us to create react element and elminate the complexity of React.createElement().

## Role of type attribute in script tag? What options can I use there?

- It indicates the scripting language or technology used in the script code.
- by default

```HTML
<script type = text/javascript></script>
```

- **options**
  - _type ="module"_ : ECMAScript modules allow you to use the import and export statements for modular JavaScript code.
  - _type = "application/json"_ : If you want to embed JSON data within a <script> tag.
  - _type = "application/xml"_ : If you want to embed XML data within a
  - _and many more ..._

```JSX
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}
```

```JSX
{<TitleComponent />} and {<TitleComponent></TitleComponent>}
and {TitleComponent()} = both are same they are used to render a component.

{TitleComponet} = This syntax is used to reference the component without rendering it. This is used when you want pass component as a prop.

const Button = ({ icon: IconComponent }) => (
  <button>
    <IconComponent />
    Click me
  </button>
);

export const TitleComponent = () => {
  return <div>TitleComponent</div>;
};

const Apple = () => {
  return <Button icon={TitleComponent} />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apple />);
```

## can we have multiple root elements.

- no.
- because React uses a virtual DOM diffing algorithm to efficiently update the actual DOM based on changes in the virtual DOM.
- In order to perform this diffing algorithm effectively, React needs a single root element to compare and update.

## can we have multiple root.render()

- no.
- Because ReactDOM.render() is responsible for rendering a single component tree into a specified root DOM node.
- When we call ReactDOM.render() it replces the content of the specified root DOM node with the rendered component.
- If we call ReactDOM.render() multiple times, it will replace the previously rendered content, resulting in only the last rendered component being visible.

## Component Composition

we can put one component inside another component that is component composition.

```JSX
const Navlist = () => (
  <div>
    <h2>this is navlist</h2>
  </div>
);

const Navbar = () => (
  <div id='container'>
    <h1>this is navbar</h1>
    <Navlist />
  </div>
);
```

# CODING ASSIGNMENT

## Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")

- Create the same element using JSX
- Create a functional component of the same with JSX
- Pass attributes into the tag in JSX
- Composition of Component (Add a component inside another)

### App.js

```JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('div', { className: 'title' }, [
  React.createElement('h1', {}, 'heading 1'),
  React.createElement('h2', {}, 'heading 2'),
  React.createElement('h3', {}, 'heading 3'),
]);

const heading1 = (
  <div className='title'>
    <h1>heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
  </div>
);

const Navlist = () => (
  <div>
    <h2>this is navlist</h2>
  </div>
);

const Navbar = () => (
  <div id='container'>
    <h1>this is navbar</h1>
    <Navlist />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Navbar />);
```

## Create a Header Component from scratch using Functional componets with JSX

- Add a logo on left
- Add a search bar in middle
- Add user icon on right
- Add CSS to make it look nice

### Header.js

```JSX
import { AiOutlineMenu } from 'react-icons/Ai';
import { FaReact } from 'react-icons/Fa';
import './Header.css';
const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <FaReact size={'3rem'} />
      </div>
      <div>
        <input type='text' placeholder='seach here' className='search' />
      </div>
      <div className='icon'>
        <AiOutlineMenu size={'3rem'} />
      </div>
    </div>
  );
};
export default Header;
```

### header.css

```CSS
* {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  justify-content: space-between;
  background-color: lightskyblue;
  padding: 10px;
}

.search {
  padding: 10px;
  border-radius: 10px;
}
```

### App.js

```JSX
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);
```

### index.html

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>ep 03-Laying the foundation</title>
    <link rel="stylesheet" href="./index.css" />
  </head>
  <body>
    <div id="root">
      <h1>Not rendered</h1>
    </div>

    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    <script type="module" src="./App.js"></script>
  </body>
</html>
```
