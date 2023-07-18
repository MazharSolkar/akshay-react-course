### Higher Order Component

Function which takes another component as input, enhances it and returns new component.

> `<Card />`

```javascript
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

//=======================================================================================
// Higher Order Component
// input - Card => CardPromoted
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

export default Card;
//========================================================================================
```

> Body.js

```javascript
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  console.log(listOfRestaurant);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  // ==============================================
  const CardPromoted = WithPromotedLabel(Card);
  // ==============================================

  useEffect(() => {
    fetchData();
  }, []);

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
      // ======================================================================
      <div className='card-container flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center'>
        {searchedRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.data?.id}
            to={`/restaurant/${restaurant?.data?.id}`}>
            {restaurant?.data?.promoted ? (
              <CardPromoted resData={restaurant} />
            ) : (
              <Card resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
      // =======================================================================
    </div>
  );
};

export default Body;
```

### Controlled and Uncontrolled Component

**_RestaurantCategory_** is controlled component, it is controlled by parent component **_RestaurantCategory_**

When **_RestaurantCategory_** had its own state it was controlled componet. (It was managing its own state.)

> `<RestaurantCategory />` (Uncontrolled)

```javascript
import ItemList from './ItemList';
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <span className='font-bold '>
            {data.title} {`(${data?.itemCards?.length})`}
          </span>
          <span>{'➕'}</span>
        </div>
        {/* Accoridan Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
```

### Lifting the State UP

- By default data flows from parent to child in React JS.
- **_Sending data from child to parent is known as lifting the state up._**

> `<RestaurantMenu />` (controlling the state of child RestaurantCategory)

```javascript
const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (restaurantInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.cards[0]?.card?.card?.info;

  const categories =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.['card']?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );

  return (
    <div className='menu-container text-center'>
      <h1 className='font-bold my-6 text-2xl'>{name}</h1>
      <p className='font-bold text-lg'>
        {cuisines.join(', ')} - {costForTwoMessage}
      </p>
      {/* categories */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            // ==============================================
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
            // =============================================
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
```

> RestaurantCategory.js (Controlled Component \_\_By **RestaurantMenu** Component)

```javascript
import ItemList from './ItemList';
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className='w-6/12 m-auto my-4 bg-gray-50 shadow-lg'>
        <div
          className='flex justify-between cursor-pointer'
          onClick={handleClick}>
          <span className='font-bold '>
            {data.title} {`(${data?.itemCards?.length})`}
          </span>
          <span>{'➕'}</span>
        </div>
        {/* Accoridan Body */}
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
```

# Context API

- It helps to avoid prop drilling.
- Data which we want to access anywhere in our app is stored in context.
- eg: data like login/logout details, theme light/dark etc.

### createContext()

createContext() hook is used for creating context.

In below example **UserContext** is created. and default value is assigned to **loggedInUser**

> UserContext.js

```javascript
import { createContext } from 'react';

const UserContext = createContext({
  loggedInUser: 'Default User',
});

export default UserContext;
```

### useContext(context_name)

useContext() hook is used for accessing context.

> Header.js

```javascript
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header = () => {
  const [value, setValue] = useState('login');

  const onlineStatus = useOnlineStatus;

  //==================================================
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  //==================================================
  return (
    <div className='header-container '>
      <div className='logo-container'>
        <MdFoodBank />
      </div>
      <ul>
        <li>{loggedInUser}</li>
      </ul>
    </div>
  );
};

export default Header;
```

### ContextName.Consumer Component

In class based components we don't have useContext hook. So we have another way of accessing context which is with the help of **ContextName.Consumer Component**.

**Inside this component we write JSX, and we have callback function which gives access to context data.**

> About.js

```javascript
import UserContext from '../utils/UserContext';

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <UserContext.Consumer>
            {(data) => <h1>{data.loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass />
      </div>
    );
  }
}

export default About;
```

### Context.Provider

This component is used for providing context values to children components. (children == components that it wraps)

> In below example we have used Context.Provider with useState

> App.js

```javascript
import { useState } from 'react';
import UserContext from './utils/UserContext';

const App = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Make an API call and send username and password
    const data = {
      name: 'Mazhar Solkar',
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <UserContext.Provider value={{ loggedInUser: 'Akshay Saini' }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};
```

> Body.js

```javascript
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';

const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setSearchText] = useState('');

  const CardPromoted = WithPromotedLabel(Card);

  useEffect(() => {
    fetchData();
  }, []);

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
    <div className='body-container filter'>
      <div className='search my-5'>
        <label htmlFor='contextExample'>context eg: </label>
        <input
          name='contextExample'
          type='text'
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Body;
```
