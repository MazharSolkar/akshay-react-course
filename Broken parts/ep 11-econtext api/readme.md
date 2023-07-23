## CONTEXT API

![image](https://github.com/MazharSolkar/akshay-react-course/assets/86589812/6457ec20-01de-4156-b567-00626fa2477b)

I have data (eg: state) in `<App/>` component and I want to pass that data to `<GrandChild />`.

First I have to pass state as prop to `<Parent />` component then `<Child />` and then `<GrandChild />`.

To get data directly in `<GrandChild />` component and avoid prop drilling we can use **Context API**.

![image](https://github.com/MazharSolkar/akshay-react-course/assets/86589812/7d3c2ce4-9e89-4e33-b9fa-81a5627916bd)

`createContext:` createContext is a method provided by the React object that creates a new context. It returns a Context object, which includes a Provider and a Consumer.

`Provider:` The Provider component is used to wrap a section of your React component tree. It accepts a value prop, which can be any data you want to share with components that access this context.

`Consumer:` the Consumer component was used to access the context value within class components. However, with the introduction of hooks in React, the useContext hook is the preferred way to access context values within functional components.

`useContext:` The useContext hook is used to access the current value of the context within a functional component.

> note: In functional component useContext() hook doesn't work we use Consumer there for accessing context value. But in functional component both options are available.

createContext is used to create context.
Provider is used to give value to the conext.
useContext and Consumer are used for acessing context value.

---

## PROP DRILLING

`<App />`

```javascript
import './components/index.css';
import Parent from './components/Parent';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('Mazhar Solkar');
  return (
    <div>
      <Parent data={data} />
    </div>
  );
}

export default App;
```

`<Parent />`

```javascript
import Child from './Child';

const Parent = ({ data }) => {
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <Child data={data} />
    </div>
  );
};
export default Parent;
```

`<Child />`

```javascript
import GrandChild from './GrandChild';

const Child = ({ data }) => {
  return (
    <div className='child'>
      <h1>Child Component</h1>
      <GrandChild data={data} />
    </div>
  );
};
export default Child;
```

`<GrandChild />`

```javascript
const GrandChild = ({ data }) => {
  return (
    <div className='grand-child'>
      <h1>Grand Child Component</h1>
      <h1>{data}</h1>
    </div>
  );
};
export default GrandChild;
```

### Output

<img src="https://github.com/MazharSolkar/akshay-react-course/assets/86589812/c8455507-0ff3-4a16-b6eb-e904dc991e61" width=500 />

<br />

---

## CONTEXT API

- Creating context and providing default value (store it in seperate file good practice).

- By providing a default value of { age: 'Default age' }, you are ensuring that if a component consumes the `context` but does not have a matching `Context.Provider` higher up in the component tree, it will still receive the `default value` as the `initial context value`. This can be useful to avoid errors in components that use the context but are not wrapped within a provider.

-If you don't have any meaningful default value then simply pass null `createContext(null)`.

`AgeContext.js`

```javascript
import { createContext } from 'react';

const AgeContext = createContext({
  age: 'Default age (not wrapped)',
});

export default AgeContext;
```

> Wrapping component tree inside `AgeContext.Provider` component and passing values for the context inside value prop.

`<App />`

```javascript
import './components/index.css';
import Parent from './components/Parent';
import { useState } from 'react';
import AgeContext from './context/AgeContext';

function App() {
  const [age, setAge] = useState('18');
  return (
    <AgeContext.Provider value={{ age: age, setAge }}>
      <div className='app'>
        <h1>App.jsx is on top of the component tree</h1>
        <Parent />
      </div>
    </AgeContext.Provider>
  );
}

export default App;
```

> accessing context value inside grandChild using `useContext() hook`.

`<GrandChild />`

```javascript
import { useContext } from 'react';
import AgeContext from '../context/AgeContext';

const GrandChild = () => {
  // console.log(useContext(AgeContext));

  const { age, setAge } = useContext(AgeContext);

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className='grand-child'>
      <h1>Grand Child Component</h1>
      <h1>age: {age}</h1>
      <input type='text' onChange={handleChange} />
    </div>
  );
};
export default GrandChild;
```

### Here's a summary of how this context works:

- You create the AgeContext using createContext and provide the default value of { age: 'Default age' }.

- In your App component, you wrap the component tree with AgeContext.Provider, where you set the actual age and setAge values using useState.

- Any child component (like GrandChild and Child) that consumes the AgeContext will be able to access the current age value and update it using the setAge function provided by the context.

- Overall, this is a good approach for creating a context, especially when you want to provide default values for the context or when you expect some components to use the context without having a provider higher up in the tree.

## Accessing Context value in Class based components.

`<GrandChild /> classBased Component`

```javascript
import { useContext } from 'react';
import AgeContext from '../context/AgeContext';
import { Component } from 'react';

class GrandChild extends Component {
  render() {
    return (
      <AgeContext.Consumer>
        {({ age, setAge }) => {
          const handleChange = (e) => {
            setAge(e.target.value);
          };
          return (
            <div className='grand-child'>
              <h1>Grand Child Component</h1>
              <h1>age: {age}</h1>
              <input type='text' onChange={handleChange} />
            </div>
          );
        }}
      </AgeContext.Consumer>
    );
  }
}

export default GrandChild;
```

`<GrandChild /> class component if there are more than one contexts to be consumed.`

```javascript
import React from 'react';
import AgeContext from '../context/AgeContext';
import AgeContext from '../context/NameContext';
import { createContext } from 'react';

const GrandChild = () => {
  return (
    <NameContext.Consumer>
      {(contextValue) => {
        const { name, setName } = contextValue;
        return (
          <AgeContext.Consumer>
            {(contextValue) => {
              const { age, setAge } = contextValue;
              const handleChange = (e) => {
                setAge(e.target.value);
              };
              return (
                <div className='grand-child'>
                  <h1>Grand Child Component</h1>

                  <div>
                    <h1>age: {age}</h1>
                    <input type='text' onChange={handleChange} />
                  </div>
                </div>
              );
            }}
          </AgeContext.Consumer>
        );
      }}
    </NameContext.Consumer>
  );
};

export default GrandChild;
```
