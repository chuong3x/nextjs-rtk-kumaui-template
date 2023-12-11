import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from "../store";

const initialState = {
    text: "Default",
};
const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        reset: (state, action: PayloadAction<void>) => {
            state.text = "Default";
        },
    },
});

export const { set, reset } = textSlice.actions;
export const textSelector = (state: RootState) => state.text;
//Reducer
const textReducer = textSlice.reducer;
export default textReducer;
