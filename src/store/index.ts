import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter.slice'
import { apiSlice } from '@/api'
import { exampleMiddleware, exampleMiddleware2 } from './middleware'
import testSlice from './test.slice'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        test: testSlice.reducer
    },
    devTools: true,
    middleware: (dfMiddleWare) =>
        dfMiddleWare().concat(apiSlice.middleware, exampleMiddleware, exampleMiddleware2)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
