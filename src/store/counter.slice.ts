import { createSlice, createReducer } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (currentState, action) => {
            currentState.value += 1
        },
        decrement: (currentState, action) => {
            currentState.value -= 1
        }
    }
})
export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
