import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        createUser: (state, action) => {
            state = { ...action.payload } // shallow copy
        },
        updateUser: (state, action) => {
            state = { ...state, ...action.payload } // shallow copy
        },
        deleteUser: (state, action) => {
            state = { ...action.payload }; // shallow copy
        }
    }
});

export const {createUser, updateUser, deleteUser}= userSlice.actions;
export default userSlice.reducer