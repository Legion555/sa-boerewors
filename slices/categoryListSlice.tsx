import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

// Define a type for the slice state
interface CategoryListState {
    value: Array<any>
}

// Define the initial state using that type
const initialState = {
    value: []
} as CategoryListState

export const categoryListSlice = createSlice({
    name: 'categoryList',
    initialState,
    reducers: {
        updateCategoryList: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        },
        addToCategoryList: (state, {payload}) => {
            state.value.push(payload)
        },
        removeFromCategoryList: (state, {payload}) => {
            state.value.splice(payload, 1);
        },
        resetCategoryList: () => initialState
    }
})

export const {updateCategoryList, addToCategoryList, removeFromCategoryList, resetCategoryList} = categoryListSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const categoryList = (state: RootState) => state.categoryList.value

export default categoryListSlice.reducer