import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NotFound from './components/NotFound';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

import { createBrowserRouter, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

let appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Use 'index: true' for the default index route
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'order-summary',
        element: <OrderSummary />,
      },
      {
        path: 'products',
        element: <Products />,
        children: [
          {
            index: true, // Use 'index: true' for the default index route
            element: <FeaturedProducts />,
          },
          {
            path: 'featured',
            element: <FeaturedProducts />,
          },
          {
            path: 'new',
            element: <NewProducts />,
          },
        ],
      },
      {
        path: 'users',
        element: <Users />,
      },
      {
        path: 'users/:userId',
        element: <UserDetails />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export { appRouter };
export default App;

// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import OrderSummary from './components/OrderSummary';
// import NotFound from './components/NotFound';
// import Products from './components/Products';
// import NewProducts from './components/NewProducts';
// import FeaturedProducts from './components/FeaturedProduct';
// import Users from './components/Users';
// import UserDetails from './components/UserDetails';
// import Admin from './components/Admin';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='about' element={<About />} />
//         <Route path='order-summary' element={<OrderSummary />} />
//         <Route path='products' element={<Products />}>
//           <Route index element={<FeaturedProducts />} />
//           <Route path='new' element={<NewProducts />} />
//           <Route path='featured' element={<FeaturedProducts />} />
//         </Route>
//         <Route path='users' element={<Users />} />
//         <Route path='users/:userId' element={<UserDetails />} />
//         <Route path='*' element={<NotFound />} />
//       </Routes>
//     </div>
//   );
// };
// export default App;
