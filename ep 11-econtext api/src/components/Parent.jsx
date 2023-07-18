import Child from './Child';

const Parent = ({ data }) => {
  return (
    <div className='parent'>
      <h1>Parent Component</h1>
      <Child data={data} />
    </div>
  );
};
export default Parent;
