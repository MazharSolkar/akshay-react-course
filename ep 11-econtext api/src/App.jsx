import './components/index.css';
import Parent from './components/Parent';
import { useState } from 'react';

function App() {
  const [data, setData] = useState('Mazhar Solkar');
  return (
    <div className='app'>
      <h1>App.jsx is on top of the component tree</h1>
      <Parent data={data} />
    </div>
  );
}

export default App;
