import { useNavigate } from 'react-router-dom';

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <section className='w-full flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-center'>Order Confirmed!</h1>
        <button
          className='border-2 border-purple-300 rounded-lg px-4 mt-4'
          onClick={() => {
            navigate(-1);
          }}>
          Go back
        </button>
      </div>
    </section>
  );
};
export default OrderSummary;
