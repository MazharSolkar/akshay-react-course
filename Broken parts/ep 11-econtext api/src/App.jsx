import './components/index.css';
import Parent from './components/Parent';
import { useContext, useState } from 'react';
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
