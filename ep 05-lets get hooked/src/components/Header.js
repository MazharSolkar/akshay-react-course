import { MdFoodBank } from 'react-icons/md';

const Header = () => {
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
      </ul>
    </div>
  );
};

export default Header;
