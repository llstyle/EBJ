import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Catalog from './pages/Catalog.tsx';
import Cart from './pages/Cart.tsx';
import Profile from './pages/Profile.tsx';
import MainLayout from './layouts/MainLayout.tsx';
import { login } from './features/users/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user') || 'null');
        if (token && user) {
            dispatch(login({ user, token }));
        }
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="products" element={<Catalog />} />
                <Route path="cart" element={<Cart />} />
                <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
function useEffect(arg0: () => void, arg1: undefined[]) {
  throw new Error('Function not implemented.');
}

