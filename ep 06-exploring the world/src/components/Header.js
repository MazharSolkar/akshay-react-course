import { MdFoodBank } from 'react-icons/md';
import { useState } from 'react';

const Header = () => {
  const [value, setValue] = useState('login');
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <MdFoodBank className='logo' />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <button
          className='auth-btn'
          onClick={() => {
            value === 'login' ? setValue('logout') : setValue('login');
            console.log('clicked auat thn');
          }}>
          {value}
        </button>
      </ul>
    </div>
  );
};

export default Header;
