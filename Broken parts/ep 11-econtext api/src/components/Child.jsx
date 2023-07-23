import GrandChild from './GrandChild';

const Child = () => {
  return (
    <div className='child'>
      <h1>Child Component</h1>
      <GrandChild />
    </div>
  );
};
export default Child;
