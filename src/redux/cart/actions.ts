import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './state'

const customerProductCartSlice = createSlice({
    name: 'cartCrud',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.products.push({
                productId: action.payload.productId,
                quantity: action.payload.quantity,
                amount: action.payload.amount,
                image: action.payload.image,
                title: action.payload.title
            });
            state.totalAmount += (action.payload.quantity * action.payload.amount);
            state.totalQuantity += action.payload.quantity
        },
        increaseQuantity: (state, action) => {
            const index = state.products.findIndex(p => p.productId === action.payload.productId);
            const amount = state.products[index].amount;
            const quantity = state.products[index].quantity;
            state.products[index].quantity += 1;
            state.totalQuantity += action.payload.quantity
            state.totalAmount -= (amount * quantity)
            state.totalAmount += (amount * state.products[index].quantity)
        },
        decreaseQuantity: (state, action) => {
            const index = state.products.findIndex(p => p.productId === action.payload.productId);
            const amount = state.products[index].amount;
            const quantity = state.products[index].quantity;
            state.products[index].quantity -= 1;
            state.totalQuantity -= action.payload.quantity
            state.totalAmount -= (amount * quantity)
            state.totalAmount += (amount * state.products[index].quantity)
        },
        removeItem: (state, action) => {
            const index = state.products.findIndex(p => p.productId === action.payload.productId);

            if (index !== -1) {
                const amount = state.products[index].amount;
                const quantity = state.products[index].quantity;

                // Remove product from array
                state.products.splice(index, 1);

                // Update totals safely
                state.totalQuantity = Math.max(0, state.totalQuantity - quantity);
                state.totalAmount = Math.max(0, state.totalAmount - (amount * quantity));
            }
        },
        clearAll: (state, action) => {
            state.products = state.products.slice(0, 0);
            state.totalAmount = 0;
            state.totalQuantity = 0;
        }
    }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearAll } = customerProductCartSlice.actions;
export default customerProductCartSlice.reducer;