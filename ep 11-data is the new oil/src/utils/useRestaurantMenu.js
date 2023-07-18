import { useEffect, useState } from 'react';
import { MENUE_API } from '../utils/config';

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(MENUE_API + resId);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return restaurantInfo;
};

export default useRestaurantMenu;

// const { resId } = useParams();

// useEffect(() => {
//   fetchMenu();
// }, []);

// const fetchMenu = async () => {
//   const data = await fetch(`${MENUE_API}${resId}`);

//   const json = await data.json();
//   console.log(json);
//   setRestaurantInfo(json.data);
// };
