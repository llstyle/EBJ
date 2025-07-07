import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.tsx';
import AuthLayout from '../layouts/AuthLayout.tsx';
import Home from '../pages/Home.tsx';
import Login from '../pages/Login.tsx';
import Register from '../pages/Register.tsx';
import Catalog from '../pages/Catalog.tsx';
import Cart from '../pages/Cart.tsx';
import Profile from '../pages/Profile.tsx';
import ProtectedRoute from './ProtectedRoute.tsx';

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
        children: [
          { path: '', element: <Home /> },
          { path: 'products', element: <Catalog /> },
          { path: 'cart', element: <Cart /> },
          { path: 'profile', element: <Profile /> },
        ],
      },
    ],
  },
  {
    path: '/login',
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);
