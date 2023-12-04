import { type PayloadAction, createSlice, type SliceCaseReducers, createAsyncThunk } from '@reduxjs/toolkit'
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
        
        tesstReducer(){
            return ()=>{
                
            }
        },
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
        })
        builder.addCase(test.fulfilled, (crState, action) => {
            crState.status = 'done'
        })
    }
})
const test = createAsyncThunk('ctesst', async (_, { dispatch, getState }) => {
    const a = new Promise((rs, rj) => {
        setTimeout(() => { rs(8) }, 4000)
    })
    const af = await a.then(result => result)
    return af
})

export { test }
export default counterSlice.reducer
export const { increment, decrement, other } = counterSlice.actions
