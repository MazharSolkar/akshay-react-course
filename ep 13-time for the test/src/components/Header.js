import { MdFoodBank } from 'react-icons/md';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [value, setValue] = useState('login');

  const onlineStatus = useOnlineStatus;

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  // Subscribing to the redux store using a Selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className='header-container border-2 border-red-400 flex flex-col items-center lg:flex-row lg:justify-between'>
      <div className='logo-container'>
        <MdFoodBank className='logo w-20 h-20 m-1 text-orange-400' />
      </div>
      <ul className='flex flex-col items-center lg:flex-row lg:px-4'>
        <li className='border-2 border-red-400 p-1 mb-1'>
          Online Status : {onlineStatus ? '🟢' : '❌'}
        </li>
        <li className='p-1 mb-1 lg:mx-4'>
          <Link to={'/'}>Home</Link>
        </li>
        <li className='p-1 mb-1 lg:mx-4'>
          <Link to={'/about'}>About</Link>
        </li>
        <li className='p-1 mb-1 lg:mx-4'>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li className='p-1 mb-1 lg:mx-4'>
          <Link to={'/grocery'}>Grocery</Link>
        </li>
        <li className='p-1 mb-1 lg:mx-4 font-bold text-xl'>
          <Link to={'/cart'}>Cart ({cartItems.length} items)</Link>
        </li>
        <li>
          <button
            className='auth-btn'
            onClick={() => {
              value === 'login' ? setValue('logout') : setValue('login');
              console.log('clicked auth btn');
            }}>
            {value}
          </button>
        </li>
        <li className='p-1 mb-1 lg:mx-4 font-bold'>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
