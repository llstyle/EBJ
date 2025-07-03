import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        user: null as User | null,
        error: null,
    },
    reducers: {
        login: (state, action) => {
            state.isAuth = true;
            state.user = action.payload;
            state.error = null;;
            console.log('User logged in:', action.payload);
        },
        logout: (state) => {
            state.isAuth = false;
            state.user = null;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

export const { login, logout, setError } = userSlice.actions;