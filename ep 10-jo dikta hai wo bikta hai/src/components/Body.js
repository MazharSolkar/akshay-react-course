import resList from '../utils/mockData';
import useOnlineStatus from '../utils/useOnlineStatus';
import { Card } from './Card';
import Shimmer from './Shimmer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  console.log('Body Rendered');

  const fetchData = async () => {
    let data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1243446&lng=72.84490140000001&page_type=DESKTOP_WEB_LISTING'
    );
    let res = await data.json();
    setListOfRestaurant(res?.data?.cards[2]?.data?.data?.cards);
    setSearchedRestaurant(res?.data?.cards[2]?.data?.data?.cards);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you're offline!! please check your internet connection;
      </h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className='body-container'>
      <div className='filter my-5'>
        <div className='search'>
          <input
            type='text'
            className='search-box border-2 border-black w-30 h-8 ml-2'
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
            }}
            className='border-2 border-black ml-1 px-5 py-[3px]'>
            Search
          </button>
          <button
            className='filter-btn border-2 border-orange-400 px-4 py-1 ml-4'
            onClick={() => {
              let topRatedRestaurant = listOfRestaurant.filter(
                (restaurant) => restaurant?.data?.avgRating > 4
              );
              setSearchedRestaurant(topRatedRestaurant);
            }}>
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className='card-container flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center'>
        {searchedRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.data?.id}
            to={`/restaurant/${restaurant?.data?.id}`}>
            <Card resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
