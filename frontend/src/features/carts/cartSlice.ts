import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            //state.items.push(item);
            state.totalQuantity += 1;
            state.totalPrice += item.price;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            //const itemIndex = state.items.findIndex(item => item.id === itemId);
            // if (itemIndex >= 0) {
            //     const item = state.items[itemIndex];
            //     state.items.splice(itemIndex, 1);
            //     state.totalQuantity -= 1;
            //     state.totalPrice -= item.price;
            // }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalPrice = 0;
        },
    },
});