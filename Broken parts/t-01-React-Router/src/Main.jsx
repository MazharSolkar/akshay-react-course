import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './App';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<RouterProvider router={appRouter} />);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// const root = ReactDOM.createRoot(document.querySelector('#root'));

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
