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
