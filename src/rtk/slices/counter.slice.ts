import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const initialState = {
    count: 0,
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increase: (state, action: PayloadAction<void>) => {
            state.count += 1;
        },
        descrease: (state, action: PayloadAction<void>) => {
            state.count -= 1;
        },
    },
});

export const { increase, descrease } = counterSlice.actions;
export const counterSelector = (state: RootState) => state.counter;
//Reducer
const counterReducer = counterSlice.reducer;
export default counterReducer;
