import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

// Define a type for the slice state
interface UserDataState {
    value: Object
}

// Define the initial state using that type
const initialState = {
    value: null
} as UserDataState

export const userDataSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        updateUserData: (state, action: PayloadAction<Object>) => {
            state.value = action.payload
        },
        resetUserData: () => initialState
    }
})

export const {updateUserData, resetUserData} = userDataSlice.actions

export default userDataSlice.reducer