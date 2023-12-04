import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.slice'
import  {apiSlice}  from '@/api'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    devTools: true,
    middleware: (dfMiddleWare) =>
    dfMiddleWare().concat(apiSlice.middleware)
})

export default store
export declare type TGlobalState = ReturnType<typeof store.getState>
