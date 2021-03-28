import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface CartState {
    value: Array<any>
}

const initialState = {
    value: []
} as CartState

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            state.value.push(payload)
        },
        removeFromCart: (state, {payload}) => {
            state.value.splice(payload, 1);
        },
        addQuantity: (state, {payload}) => {
            state.value[payload].quantity = state.value[payload].quantity + 1
        },
        removeQuantity: (state, {payload}) => {
            state.value[payload].quantity = state.value[payload].quantity - 1
        },
        resetCart: () => initialState
    }
})

export const {addToCart, removeFromCart, addQuantity, removeQuantity, resetCart} = cartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const cart = (state: RootState) => state.cart.value

export default cartSlice.reducer