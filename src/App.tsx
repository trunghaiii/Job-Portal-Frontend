import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomeLayout from './components/HomeLayout/HomeLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';

import Home from './components/HomeLayout/Home/Home';
import Postings from './components/HomeLayout/Postings/Postings';
import PostingDetail from './components/HomeLayout/PostingDetail/PostingDetail';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import { getUserDataAccount } from './services/api';
import { useDispatch } from 'react-redux';
import { saveUserData } from './redux/slices/userSlice';

import DashBoard from './components/AdminLayout/DashBoard/DashBoard';
import Companies from './components/AdminLayout/Companies/Companies';
import Users from './components/AdminLayout/Users/Users';
import Jobs from './components/AdminLayout/Jobs/Jobs';
import Resumes from './components/AdminLayout/Resumes/Resumes';

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
        path: "/postings",
        element: <Postings />
      },
      {
        path: "/posting-detail",
        element: <PostingDetail />
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
      },
      {
        path: "user",
        element: <Users />
      },
      {
        path: "job",
        element: <Jobs />
      },
      {
        path: "resume",
        element: <Resumes />
      }
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
