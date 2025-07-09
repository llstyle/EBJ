import { configureStore } from '@reduxjs/toolkit';
import {cartSlice} from '../features/carts/cartSlice';
import {userSlice} from '../features/users/userSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    user: userSlice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;