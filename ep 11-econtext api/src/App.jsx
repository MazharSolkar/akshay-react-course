import './components/index.css';
import Parent from './components/Parent';
import { createContext, useState } from 'react';

const AppContext = createContext();
const AgeContext = createContext(27);

function App() {
  const [name, setName] = useState('Mazhar Solkar');
  return (
    <AppContext.Provider value={[name, setName]}>
      <AgeContext.Provider value={{ loggedInUser: 'Default User', setName }}>
        <div className='app'>
          <h1>App.jsx is on top of the component tree</h1>
          <Parent />
        </div>
      </AgeContext.Provider>
    </AppContext.Provider>
  );
}

export { AppContext, AgeContext };
export default App;
