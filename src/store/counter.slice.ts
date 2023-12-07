import { type PayloadAction, createSlice, type SliceCaseReducers, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiSlice } from '@/api'
import testSlice from './test.slice'
interface payload {
    value: number
    status: 'none' | 'pending' | 'done'
}
const counterSlice = createSlice<payload, SliceCaseReducers<payload>, string>({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'none'
    },
    reducers: {
        increment: (currentState: payload) => {
            currentState.value += 1
        },
        decrement: (currentState: payload, action: PayloadAction<payload, string>) => {
            console.log(action.payload.value)
            currentState.value -= 1
        },
        other: {
            reducer (currentState: payload, action: PayloadAction<payload, string>) {
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
    },
    extraReducers (builder) {
        builder.addCase(test.pending, (crState, action) => {
            crState.status = 'pending'
            console.log(action)
        })
        builder.addCase(test.fulfilled, (crState, action) => {
            crState.status = 'done'
            console.log(action)
        })
        builder.addCase(testSlice.actions.check, (state, action)=>{
            console.log('fffff')
        })
        builder.addMatcher(apiSlice.endpoints.getName.matchFulfilled,(crState, actions)=>{
            console.log(1232313)
        })
    }
})
const test = createAsyncThunk('testthunk', async (_, { dispatch, getState }) => {
    return (await axios.get('https://raw.githubusercontent.com/BinhNguyen1234/api/master/info-mockup.json')).data
})

export { test }
export default counterSlice.reducer
export const { increment, decrement, other } = counterSlice.actions
