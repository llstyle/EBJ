import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'products', element: <Catalog /> },
      { path: 'cart', element: <Cart /> },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: 'register', element: <Register /> },
    ],
  },
]);
