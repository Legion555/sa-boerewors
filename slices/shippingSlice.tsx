import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface IShipping {
    value: any;
    contactName: string;
    contactNumber: string;
    shippingMethod: string;
    shippingAddress: string;
    prefferedTime: string;
    availableDates: string;
    shippingCost: number;
  }

interface ShippingSlice {
    value: Object
}

const initialState = {
    value: null
} as unknown as IShipping

export const shippingSlice = createSlice({
    name: 'shipping',
    initialState,
    reducers: {
        updateShipping: (state, {payload}) => {
            state.value = payload
        },
        resetShipping: () => initialState
    }
})

export const {updateShipping, resetShipping} = shippingSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const shipping = (state: RootState) => state.shipping.value

export default shippingSlice.reducer