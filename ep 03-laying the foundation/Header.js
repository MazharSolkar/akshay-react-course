import { AiOutlineMenu } from 'react-icons/Ai';
import { FaReact } from 'react-icons/Fa';
import './Header.css';
const Header = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <FaReact size={'3rem'} />
      </div>
      <div>
        <input type='text' placeholder='seach here' className='search' />
      </div>
      <div className='icon'>
        <AiOutlineMenu size={'3rem'} />
      </div>
    </div>
  );
};
export default Header;
