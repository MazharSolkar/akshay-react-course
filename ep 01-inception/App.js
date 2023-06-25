// Hello World using react

const heading = React.createElement(
  'h1',
  { id: 'heading', class: 'giant' },
  'Hello World! using react'
);
/*
- React.createElement = creates react element which is an object, that will be coverted into html later on.
- {} this object is used to give attributes like class, id etc.
*/

console.log(heading); // return object

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(heading);
//root.render() convert object(which is react element) into html element and puts it into dom

// <========================================================================>

/*
<div id="parent">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h1>I'm h1 tage</h1>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h1>I'm h1 tage</h1>
    </div>
</div>
*/

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

// to avoid this complex structure there is alternative in react which is jsx
