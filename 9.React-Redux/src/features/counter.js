import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counter = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, actions) => {
            state.value++
        },
        decrement: (state, actions) => {
            state.value--
        },
        multiply: (state, actions) => {
            state.value = state.value *10
        },
        divide: (state, actions) => {
            state.value = state.value /10
        }
    }
})

export const {increment, decrement, multiply, divide} = counter.actions
export default counter.reducer