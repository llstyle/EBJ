import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';
import { UserState } from '../../interfaces/userState';

const initialState: UserState = {
    isAuth: false,
    user: null,
    token: localStorage.getItem('token'),
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            const { user, token } = action.payload;
            state.isAuth = true;
            state.user = user;
            state.token = token;
            state.error = null;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            console.log('User logged in:', user);
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { login, logout, setError } = userSlice.actions;