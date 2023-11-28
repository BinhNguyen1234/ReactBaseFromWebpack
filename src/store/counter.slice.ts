import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (currentState) => {
            currentState.value += 1
        },
        decrement: (currentState) => {
            currentState.value -= 1
        }
    }
})
counterSlice.getInitialState()
export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
