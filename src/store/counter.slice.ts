import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
interface payload {
    value: number
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: (currentState) => {
            currentState.value += 1
        },
        decrement: (currentState, action) => {
            currentState.value -= 1
        },
        other: {
            reducer (currentState, action) {
                currentState.value += action.payload.value
            },
            prepare (value: number) {
                console.log(value)
                return {
                    payload: {
                        value
                    }
                } as Omit<PayloadAction<payload, string, any, any>, 'type'>
            }
        }
    }
})
export default counterSlice.reducer
export const { increment, decrement, other } = counterSlice.actions
