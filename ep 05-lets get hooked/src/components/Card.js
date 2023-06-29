import CDN_URL from '../utils/config';

export const Card = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.data;
  return (
    <div className='card'>
      <div className='card-img-container'>
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

export default Card;
