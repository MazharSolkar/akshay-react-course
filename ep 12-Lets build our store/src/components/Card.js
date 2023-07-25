import CDN_URL from '../utils/config';

export const Card = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.data;
  return (
    <div className='card w-[300px] h-[340px] border-2 border-red-500 m-2'>
      <div className='card-img-container w-[100%] h-[200px]'>
        <img src={CDN_URL + cloudinaryImageId} />
        <div className='card-list'>
          <p>{name}</p>
          <p>price: {costForTwo / 100}rs</p>
          <p>cuisines: {cuisines.join(', ')}</p>
          <p>{avgRating}</p>
        </div>
      </div>
    </div>
  );
};

// Higher Order Component

export const WithPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div>
        <label className='absolute bg-black text-white m-2 mt-0 p-2 rounded-lg'>
          promoted
        </label>
        <Card {...props} />
      </div>
    );
  };
};

// input - Card => CardPromoted

export default Card;
