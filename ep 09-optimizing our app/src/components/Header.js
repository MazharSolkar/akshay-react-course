import { MdFoodBank } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [value, setValue] = useState('login');

  const onlineStatus = useOnlineStatus;
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <MdFoodBank className='logo' />
      </div>
      <ul>
        <li>Online Status : {onlineStatus ? '🟢' : '❌'}</li>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/grocery'}>Grocery</Link>
        </li>
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
