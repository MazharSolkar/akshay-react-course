const CDN_URL = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/`;

const ItemList = ({ items }) => {
  // console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className='p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between'>
          <div className='w-9/12'>
            <div className='py-2'>
              <span>{item?.card?.info?.name}</span>
              <span>
                -₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className='text-xs '>{item.card.info.description}</p>
          </div>
          <div className='lg:p-4 w-3/12 '>
            <div className='absolute '>
              <button className='lg:p-2 bg-white shadow-lg'>Add +</button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className='w-full' />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
