import resList from '../utils/mockData';
import { Card } from './Card';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState('');
  const [searchText, setSearchText] = useState('');

  const fetchData = async () => {
    let data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1243446&lng=72.84490140000001&page_type=DESKTOP_WEB_LISTING'
    );
    let res = await data.json();
    setListOfRestaurant(res?.data?.cards[2]?.data?.data?.cards);
    setSearchedRestaurant(res?.data?.cards[2]?.data?.data?.cards);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log('Body Rendered');

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body-container'>
      <div className='filter'>
        <div className='search'>
          <input
            type='text'
            className='search-box'
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(searchText);
              const searched = listOfRestaurant.filter((restaurant) =>
                restaurant.data.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setSearchedRestaurant(searched);
            }}>
            Search
          </button>
        </div>
        <button
          className='filter-btn'
          onClick={() => {
            let topRatedRestaurant = listOfRestaurant.filter(
              (restaurant) => restaurant?.data?.avgRating > 4
            );
            setSearchedRestaurant(topRatedRestaurant);
          }}>
          Top Rated Restaurants
        </button>
      </div>
      <div className='card-container'>
        {searchedRestaurant.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={`/restaurant/${restaurant.data.id}`}>
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
