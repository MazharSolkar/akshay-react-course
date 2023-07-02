import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1169888&lng=72.8869618&restaurantId=350010&submitAction=ENTER'
    );

    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json.data);
  };

  if (restaurantInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
      ?.card;

  console.log(itemCards);
  return (
    <div className='menu-container'>
      <h1>{name}</h1>
      <p>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card?.info?.name}>
            {item.card?.info?.name} -
            {item.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
      {/* <ul>
        <li>
          {
            restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1].card?.card?.itemCards[0]?.card?.info?.name
          }
        </li>
        <li>
          {
            restaurantInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1].card?.card?.itemCards[1]?.card?.info?.name
          }
        </li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
