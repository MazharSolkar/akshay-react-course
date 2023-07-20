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

> note: In functional component useContext() hook doesn't work we use Consumer there for accessing context value.

createContext is used to create context.
Provider is used to give value to the conext.
useContext and Consumer are used for acessing context value.

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

![image](https://github.com/MazharSolkar/akshay-react-course/assets/86589812/c8455507-0ff3-4a16-b6eb-e904dc991e61)

## CONTEXT API

> Creating context and providing default value (store it in seperate file good practice)

> If you don't have any meaningful default value then simply pass null `createContext(null)`.

`UserContext`

```javascript
import { createContext } from 'react';

const AgeContext = createContext({
  age: 'Default age',
});

export default UserContext;
```

> Wrapping component tree inside `AgeContext.Provider` component and passing values for the context inside value prop.

`<App />`

```javascript
import './components/index.css';
import Parent from './components/Parent';
import { useContext, useState } from 'react';
import AgeContext from './context/AgeContext';

const myAge = useContext(AgeContext);

function App() {
  const [age, setAge] = useState(myAge);
  return (
    <AgeContext.Provider value={{ age: myAge, setAge }}>
      <div className='app'>
        <h1>App.jsx is on top of the component tree</h1>
        <Parent />
      </div>
    </AgeContext.Provider>
  );
}

export { AgeContext };
export default App;
```

> accessing context value inside grandChild using `useContext() hook`.

`<GrandChild />`

```javascript

```
