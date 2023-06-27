import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';

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
root.render(<Header />);
