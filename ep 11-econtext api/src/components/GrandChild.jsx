// import { useContext } from 'react';
// import { AppContext } from '../App';

// const GrandChild = () => {
//   const [name, setName] = useContext(AppContext);

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };
//   return (
//     <div className='grand-child'>
//       <h1>Grand Child Component</h1>
//       <h1>name: {name}</h1>
//       <input type='text' onChange={handleChange} />
//     </div>
//   );
// };
// export default GrandChild;

import React from 'react';
import { AppContext } from '../App';

const GrandChild = () => {
  return (
    <div className='grand-child'>
      <h1>Grand Child Component</h1>
      <AppContext.Consumer>
        {(contextValue) => {
          const [name, setName] = contextValue;
          const handleChange = (e) => {
            setName(e.target.value);
          };
          return (
            <div>
              <h1>name: {name}</h1>
              <input type='text' onChange={handleChange} />
            </div>
          );
        }}
      </AppContext.Consumer>
    </div>
  );
};

export default GrandChild;
