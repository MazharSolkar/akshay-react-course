import { useEffect, useState } from 'react';

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // Api Calls
  }, []);

  return (
    <div className='user-card'>
      <h1>count: {count}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
    </div>
  );
};
export default User;
