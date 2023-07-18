import GrandChild from './GrandChild';

const Child = ({ data }) => {
  return (
    <div className='child'>
      <h1>Child Component</h1>
      <GrandChild data={data} />
    </div>
  );
};
export default Child;
