import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
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
                currentState +=
            },
            prepare (value): Omit<PayloadAction<any, string, any, any>, ' type'> {
                return ({
                    payload: {
                        value
                    }
                }) as any
            }
        }
    }
})
counterSlice.getInitialState()
export default counterSlice.reducer
export const { increment, decrement } = counterSlice.actions
