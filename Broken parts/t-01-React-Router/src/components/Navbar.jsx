import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='p-2 mb-10 bg-green-100'>
      <NavLink
        to='/'
        className='mx-2'
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          TextDecoder: isActive ? 'underline' : 'none',
        })}>
        Home
      </NavLink>
      <NavLink
        to='about'
        className='mx-2'
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          TextDecoder: isActive ? 'underline' : 'none',
        })}>
        About
      </NavLink>
      <NavLink
        to='products'
        className='mx-2'
        style={({ isActive }) => ({
          fontWeight: isActive ? 'bold' : 'normal',
          TextDecoder: isActive ? 'underline' : 'none',
        })}>
        Products
      </NavLink>
    </div>
  );
};
export default Navbar;

// NavLink adds active class on current active link, it also gives us boolean value for active link.
