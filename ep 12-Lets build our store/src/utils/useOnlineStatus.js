import { useEffect, useState } from 'react';

const useOnlineStatus = () => {
  // not need of any i/p from user
  // check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener('offline', () => {
      setOnlineStatus(false);
    });

    window.addEventListener('online', () => {
      setOnlineStatus(true);
    });
  }, []);

  // boolean value (return state variable)
  return onlineStatus;
};

export default useOnlineStatus;
// # How to think :
// - what is i/p of hook and what it o/p
// - in case of useRestaurantMEnu i/p was resId and o/p was restaurantInfo
