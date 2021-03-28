import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface DarkModeState {
    value: Boolean
}

const initialState = {
    value: false
} as DarkModeState

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        updateDarkMode: (state, {payload}) => {
            state.value = payload
        },
        resetDarkMode: () => initialState
    }
})

export const {updateDarkMode, resetDarkMode} = darkModeSlice.actions

export const darkMode = (state: RootState) => state.darkMode.value

export default darkModeSlice.reducer