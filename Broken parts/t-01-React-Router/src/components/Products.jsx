import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      <input
        type='text'
        placeholder='searc products...'
        className='border-2 border-green-500 rounded-lg text-left px-2'
      />
      <div className='mt-5 p-4 bg-yellow-100'>
        <Link to='featured' className='mr-3'>
          Featured
        </Link>
        <Link to='new' className='mr-3'>
          New
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default Products;
