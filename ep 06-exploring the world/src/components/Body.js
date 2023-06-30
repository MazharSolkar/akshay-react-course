import resList from '../utils/mockData';
import { Card } from './Card';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  const fetchData = async () => {
    let data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1243446&lng=72.84490140000001&page_type=DESKTOP_WEB_LISTING'
    );

    let res = await data.json();

    setListOfRestaurant(res?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (listOfRestaurant.length === 0) {
    return <Shimmer />;
  }
  console.log('Body Rendered');

  return (
    <div className='body-container'>
      <div className='filter'>
        <button
          className='filter-btn'
          onClick={() => {
            let topRatedRestaurant = listOfRestaurant.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            setListOfRestaurant(topRatedRestaurant);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className='card-container'>
        {listOfRestaurant.map((restaurant) => (
          <Card key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
