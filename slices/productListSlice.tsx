import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

// Define a type for the slice state
interface ProductListState {
    value: Array<any>
}

// Define the initial state using that type
const initialState = {
    value: []
} as ProductListState

export const productListSlice = createSlice({
    name: 'productList',
    initialState,
    reducers: {
        updateProductList: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        addToProductList: (state, {payload}) => {
            state.value.push(payload)
        },
        removeFromProductList: (state, {payload}) => {
            state.value.splice(payload, 1);
        },
        updateProduct: (state, {payload}) => {
            state.value[payload.index] = {...payload.product};
        }
    }
})

export const {updateProductList, addToProductList, removeFromProductList, updateProduct} = productListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const productList = (state: RootState) => state.productList.value

export default productListSlice.reducer