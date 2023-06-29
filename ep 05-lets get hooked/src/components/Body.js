import resList from '../utils/mockData';
import { Card } from './Card';
import { useState } from 'react';

const Body = () => {
  // usestate array destructuring :-
  // const arr = useState(resList);
  // const [listOfRestaurant, setListOfRestaurant] = arr;

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
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
