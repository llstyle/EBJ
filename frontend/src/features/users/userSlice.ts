import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: !!localStorage.getItem('token'),
        user: null as User | null,
        token: localStorage.getItem('token'),
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.error = null;
            state.token = action.payload.token;
            localStorage.setItem('token', action.payload.token);
            console.log('User logged in:', action.payload);
        },
        logout: (state) => {
            state.isAuth = false;
            state.token = null;
            localStorage.removeItem('token');
            state.user = null;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { login, logout, setError } = userSlice.actions;