import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENUE_API } from '../utils/config';

const RestaurantMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  // const params = useParams();
  // console.log(params);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // ye fetch mein jo id = 333100 wo hi url mein dalna hai localhost:1234/restaurant/33100
    const data = await fetch(`${MENUE_API}${resId}`);

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
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
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
            restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1].card?.card?.itemCards[0]?.card?.info?.name
          }
        </li>
        <li>
          {
            restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
              ?.cards[1].card?.card?.itemCards[1]?.card?.info?.name
          }
        </li>
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
