import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeLayout from './components/HomeLayout/HomeLayout';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <div>This is error page</div>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ height: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
