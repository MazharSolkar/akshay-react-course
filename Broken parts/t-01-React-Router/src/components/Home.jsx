import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full flex justify-center items-center'>
      <div>
        <h1 className='text-center'>Home Page</h1>

        <button
          onClick={() => navigate('order-summary')}
          className='border-2 border-purple-300 rounded-lg px-4 mt-4'>
          Place Order
        </button>
      </div>
    </section>
  );
};
export default Home;
