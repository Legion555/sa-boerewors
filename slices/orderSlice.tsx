import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

// interface IShipping {
//     value: any;
//     contactName: string;
//     contactNumber: string;
//     shippingMethod: string;
//     shippingAddress: string;
//     prefferedTime: string;
//     availableDates: string;
//     shippingCost: number;
//   }

interface OrderSlice {
    value: Object
}

const initialState = {
    value: null
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateOrder: (state, {payload}) => {
            state.value = payload
        },
        resetOrder: () => initialState
    }
})

export const {updateOrder, resetOrder} = orderSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const order = (state: RootState) => state.order.value

export default orderSlice.reducer