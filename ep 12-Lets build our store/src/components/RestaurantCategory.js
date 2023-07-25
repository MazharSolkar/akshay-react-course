import ItemList from './ItemList';

const RestaurantCategory = ({ data, isOpen, setShowItems }) => {
  const handleClick = () => {
    setShowItems(!isOpen);
  };

  return (
    <div>
      {/* Accordion Header */}
      <div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <span className='font-bold'>
            {data.title} {`(${data?.itemCards?.length})`}
          </span>
          <span>{isOpen ? '➖' : '➕'}</span>
        </div>
        {/* Accordion Body */}
        {isOpen && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
