import { createSlice } from '@reduxjs/toolkit'

export interface UserState {
    _id: string,
    name: string,
    email: string,
    role: string
}

const initialState: UserState = {
    _id: "",
    name: "",
    email: "",
    role: ""
}

export const UserSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        saveUserData: (state, actions) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1
            state._id = actions.payload._id
            state.name = actions.payload.name
            state.email = actions.payload.email
            state.role = actions.payload.role

        }
    },
})

// Action creators are generated for each case reducer function
export const { saveUserData } = UserSlice.actions

export default UserSlice.reducer