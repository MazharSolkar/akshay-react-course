import { useContext } from 'react';
import AgeContext from '../context/AgeContext';

const GrandChild = () => {
  // console.log(useContext(AgeContext));

  const { age, setAge } = useContext(AgeContext);

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className='grand-child'>
      <h1>Grand Child Component</h1>
      <h1>age: {age}</h1>
      <input type='text' onChange={handleChange} />
    </div>
  );
};
export default GrandChild;

// =============================
// CLASS BASED COMPONENT STYLE
// ============================

// import { useContext } from 'react';
// import AgeContext from '../context/AgeContext';
// import { Component } from 'react';

// class GrandChild extends Component {
//   render() {
//     return (
//       <AgeContext.Consumer>
//         {({ age, setAge }) => {
//           const handleChange = (e) => {
//             setAge(e.target.value);
//           };
//           return (
//             <div className='grand-child'>
//               <h1>Grand Child Component</h1>
//               <h1>age: {age}</h1>
//               <input type='text' onChange={handleChange} />
//             </div>
//           );
//         }}
//       </AgeContext.Consumer>
//     );
//   }
// }

// export default GrandChild;
