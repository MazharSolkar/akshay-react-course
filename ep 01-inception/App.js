// Hello World using react

const root = ReactDOM.createRoot(document.getElementById('root'));

const heading = React.createElement(
  'h1',
  { id: 'heading', class: 'giant' },
  'Hello World! using react'
);

console.log(heading);
// root.render(heading);

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
