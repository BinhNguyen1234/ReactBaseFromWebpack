import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'test',
    initialState: {
        isTest: true
    },
    reducers: {
        check(currentState, action){

        }
    }
})
export const {check} = testSlice.actions
export default testSlice