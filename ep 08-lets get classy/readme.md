# THEORY

- (Research) why do we use super(props) in constructor?
- (Research) Why can't we have the callback function of useEffect async?

# Virtual DOM

- JSX is converted to React element (which is object).
- So basically VDOM is hierarchical object representation of actual DOM.

# COMPONENT MOUNTING CYCLE

**_The component mounting cycle in React refers to the sequence of events that occur when a component is being created and inserted into the DOM for the first time._** It involves a set of lifecycle methods that are called in a specific order during the mounting process.

## render and commit phase of mounting cycle

**_1. Render phase :_**

- constructor is invoked.
- render() method is invoked.
  **_- render() returns JSX, which represents the virtual DOM._**
- render method constructs virtual dom.
- virtual DOM allows REACT to compare previous VDOM with the current VDOM to determine the minimal set of changes required to update the actual DOM. the difference between previous virtual dom and current virtual dom (i.e. diffing process).

**_2. Commit phase :_**

- In this phase, React takes the computed changes from the render phase and applies them to the actual DOM.
- after that the ComponentDidMount() is invoked.

### Class Based Component

- It is a class, which extends React.Component and returns piece of JSX.
- It have **_render()_** method which returns JSX.
- For passing props in class based components constructor is used.

```javascript
constructor(props) {
    super(props)
}
```

- **We always need to use this.props for using props in class based components.**

> props destructuring in class components

```javascript
const {} = this.props;
```

### Class Based vs Function Component Syntax

> Functional Component

```javascript
import { useState } from 'react';

const User = (props) => {
  const { name, location } = props;

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className='user-card'>
      <h1>{count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <Button onClick={()=> setCount({count+1})}>Increase Count</Button>
    </div>
  );
};

<User name={'mazhar'} location={'Mumbai'} />;
```

> Class Based Component

```javascript
import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className='user-card'>
        <h1>Count: {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}>
          Count Increase
        </button>
      </div>
    );
  }
}

<UserClass name={'mazhar'} location={'mumbai'} />;
```

- UserClass name={"mumbai"} location={"mumbai"} is instace of UserClass component.
- Whenever we create instance of classComponent it invokes the contructor.

# Understand React Lifecycle Method

1. ComponentDidMount

> Used to make API call after the component is mounted (in class based component).

> componentDidMount is a lifecycle method that is called immediately after a component is mounted (i.e., inserted into the DOM tree).

> In functional component we have useEffect for making API calls after component is mounted.

**WHY useEffect :**

- First quickly mount the component.
- when component is mounted then make API call and fill the data inside component.

2. ComponentDidUpdate

> It is called after update (when state or prop is updated) and trigger render() method again.

> render() method is invoked whenever state or prop is updated, it is followed by invocation of **ComponentDidUpdate** method.

3. ComponentWillUnmount

> Is is invoked when component is removed from UI. (eg: going to some other page of website).

## Example (ComponentDidMount life cycle methods)

> UserClass.js

```javascript
import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name + 'child consturctor is called');
  }

  componentDidMount() {
    console.log(this.props.name + 'Child component is mounted');
  }

  render() {
    console.log(this.props.name + 'child render is called');
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className='user-card'>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
      </div>
    );
  }
}
```

> About.js

```javascript
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent constructor is called');
  }

  componentDidMount() {
    console.log('parent component is mounted');
  }

  render() {
    console.log('parent render is called');
    return (
      <div>
        <UserClass name={'first '} location={'Mumbai'} />
        <UserClass name={'second '} location={'Mumbai'} />
      </div>
    );
  }
}

export default About;
```

### --- Mounting Cycle ---

two phases

1. render phase
2. commit phase

after each commit phase ComponentDidMount() is invoked

render phase
child 1
child 2

commit phase
child 1
child 2

> When there are two children render phase and commit phase of them will be batched together.

![image](https://github.com/MazharSolkar/akshay-react-course/assets/86589812/d8357f53-2b91-4864-8825-c8c3311c2d04)

**_Q. Why react doing this batching._**

> When we are loading componet DOM manipulation is expensive (it takes alot of time).

> So react first do rendering phase then commit phase is done for upadting the DOM.

> First child 1 and child 2 will be rendered in single batch. (render phase)
> Then child 1 and child 2 will be added in DOM (in commit phase)

![image](https://github.com/MazharSolkar/akshay-react-course/assets/86589812/c88158c5-fec7-45c9-9132-d873075d8108)

# All Lifecycle Methods (fetching user with github api)

> UserClass.js

```javascript
class UserClass extends React.Component {
  constructor(props) {
    console.log('constructor is called');
    super(props);

    this.state = {
      userInfo: {
        name: 'dummy',
        bio: 'default',
        avatar_url: null,
      },
    };
  }

  async componentDidMount() {
    console.log('Component mounted');
    const data = await fetch('https://api.github.com/users/mazharsolkar');
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log('component did update is called');
  }

  componentWillUnmount() {
    console.log('component will uncmount called');
  }

  render() {
    console.log('render called');
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className='user-card'>
        <img src={`${avatar_url}`} alt='' />
        <h2>Name: {name}</h2>
        <h3>Bio: {bio}</h3>
      </div>
    );
  }
}
```

> About.js

```javascript
import User from './User';
import UserClass from './UserClass';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('parent constructor is called');
  }

  componentDidMount() {
    console.log('parent component is mounted');
  }

  render() {
    console.log('parent render is called');
    return (
      <div>
        <UserClass />
      </div>
    );
  }
}

export default About;
```

> complete explanation

### --- Mounting Cycle ---

1 render phase

- The component UserClass will first render with default data.

2 commiting phase

- ComponentDidMount() is invoked after mounting phase.

- We made a API call inside ComponentDidmount() where we are updating the state with fetched user data.

- It will trigger Update cycle.

### --- Update Cycle ---

- component will re-render (as we know whenever state or prop changes it happen).
- render phase will happen. (as it happens in Mounting cycle).
- then commit phase will take place. (as it happen in Mounting cycle)
- after that ComponentDidUpdate() will be invoked.

### --- Unmounting Cycle ---

- ComponentWillUnmount() is invoked.
- It is invoked when componet is removed from UI. (eg: Going to some other page of website.)

# NOTE:

Never compare **_Class Components_** lifcycle methods with **_Functional Components_**.

### SPA

we have only one page in our application.
We are just changing components.
