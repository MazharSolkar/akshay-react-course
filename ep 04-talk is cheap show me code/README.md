# THEORY

## Is JSX mandatory for React?

No, but it makes writing code simpler.

## Is ES6 mandatory for React?

- No
- but without es6 you cannot write hoks in functional components.
- You need to use class based components and traditional lifecycle methods provided by React.

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

## How can I write comments in JSX?

```JSX
      {/* <div className='card-container'> */}
```

## What is <React.Fragment></React.Fragment> and <></>?

- <React.Fragment> and <>
  (fragment shorthand) are used to group multiple elements without introducing an additional wrapping element in the DOM.

## What is Virtual DOM?

- virtual DOM is nested object that represents actual DOM.
- Whenever components state or prop changes React creates new virtual DOM tree by re-rendering that component.

```JSX
  let x = React.createElement("h1",{},"hey there")
  console.log(x)  // it will return react element (which is object)
```

## What is Reconciliation in React?

![Alt text]("https://cdn.hashnode.com/res/hashnode/image/upload/v1655332372081/70SnXVVGm.gif?auto=format,compress&gif-q=60&format=webm")

- Reconcilation is the process of comparing previous virtual DOM with current virtual DOM to determine changes needed to update the actual DOM to reflect new UI.
- Reconciliation alogrithm depends on two things

  1. Virtual DOM
  2. Diffing Process

- Virtual DOM :
  virtual DOM is nested object that represents actual DOM.

- Diffing :
  Diffing compares the difference between previous virtual DOM and updated virtual DOM to updated actual DOM to reflect new UI.

- Limitations
  Reconciler did not prioritize updates based on their importance.
  synchronous and blocking nature.

## What is React Fiber?

- Introduced in React-16 as a new and improved version of the Reconciler.
- advantages:
  - prioritize updates based on their importance.
  - asynchronous
- React Fiber breaks down the reconciliation process into smaller chunks called fibers. These fibers can be executed independently and prioritized based on their importance.
- Asynchronous rendering allows updates to be processed in the background while the main thread is free to handle other tasks.

## Exampele to understand Recociliation and React Fiber

## Why we need keys in React? When do we need keys in React?

## Can we use index as keys in React?

## What is props in React? ways to use

## What is a Config Driven UI?

- config is object present in ui.
- Our UI is based on dynamic data coming from the backend or api.

## CODING

### Build a Food Ordering App

- Think of a cool name for your app
- Build a AppLayout
- Build a Header Component with Logo and Nav Items and Cart
  - Build a Body Component
  - Build RestaurantCard Component
    - Use static data initially
    - Make your card dynamic(pass props)
      - Props - passing arguments to a function - use Destructuring and Spread Operator
    - Render your cards with dynamic data of restaurants
    - Use Array.map to render all the restaurants
