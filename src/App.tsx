import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeLayout from './components/HomeLayout/HomeLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';

import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { getUserDataAccount } from './services/api';
import { useDispatch } from 'react-redux';
import { saveUserData } from './redux/slices/userSlice';
import DashBoard from './components/DashBoard/DashBoard';
import Companies from './components/Companies/Companies';
import ProtectedAdminRoute from './components/ProtectedAdminRoute/ProtectedAdminRoute';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
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
    path: "/admin",
    element: <ProtectedAdminRoute><AdminLayout /></ProtectedAdminRoute>,
    errorElement: <div>This is Page does not Exist!!!</div>,
    children: [
      {
        path: "",
        element: <DashBoard />
      },
      {
        path: "company",
        element: <Companies />
      }
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
]);


function App() {

  const dispatch = useDispatch()

  const refillReduxUserData = async () => {

    if (window.location.pathname === "/login"
      || window.location.pathname === "/"
    ) return;

    // 0. get user data via access token
    const userData = await getUserDataAccount();

    // 1. refill user data to redux
    if (userData?.data?.user) dispatch(saveUserData(userData.data.user))

  }

  useEffect(() => {
    refillReduxUserData()
    document.body.style.margin = "0px";
  }, [])
  const [count, setCount] = useState(0)

  return (
    <div style={{ height: "100vh" }}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
