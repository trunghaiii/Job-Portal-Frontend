import { createSlice } from '@reduxjs/toolkit'

export interface JobState {
    jobID: string
}

const initialState: JobState = {
    jobID: ""
}

export const JobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {
        saveJobData: (state, actions) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            // state.value += 1
            // console.log(actions.payload);

            state.jobID = actions.payload

        }

    }
})

// Action creators are generated for each case reducer function
export const { saveJobData } = JobSlice.actions

export default JobSlice.reducer