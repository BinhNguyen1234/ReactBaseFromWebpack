import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.slice'
const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    devTools: true
})

export default store
export declare type TGlobalState = ReturnType<typeof store.getState>
