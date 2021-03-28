import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type { RootState } from '../store'

interface ModalState {
    value: String
}

const initialState = {
    value: null
} as ModalState

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        updateModal: (state, {payload}) => {
            state.value = payload
        },
        resetModal: () => initialState
    }
})

export const {updateModal, resetModal} = modalSlice.actions

export const modal = (state: RootState) => state.modal.value

export default modalSlice.reducer