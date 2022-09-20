import { configureStore } from '@reduxjs/toolkit'

import testSlice from "../features/sliceSlice";

export const store = configureStore({
    reducer: {
        testStore: testSlice,
    },
})