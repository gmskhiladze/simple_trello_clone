import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "1",
    value: 0,
}

export const testSlice = createSlice({
    name: 'testStore',
    initialState,
    reducers: {
        testAction: (state) => {
            state.value += 1
        },
        testActionWithPayload: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { testAction, testActionWithPayload } = testSlice.actions

export default testSlice.reducer