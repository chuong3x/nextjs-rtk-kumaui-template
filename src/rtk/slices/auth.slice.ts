import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface AuthState {
    token: string | undefined;
    user: IUser;
}
const initialState: AuthState = {
    token: "",
    user: {} as IUser,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action: PayloadAction<ServerResponse<string>>) => {
            state.token = action.payload.data;
        },
        logout: (state) => {
            state.token = "";
        },
        refresh: (state, action: PayloadAction<ServerResponse<string>>) => {
            state.token = action.payload.data;
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
    },
});

export const { login, logout, refresh, setUser } = authSlice.actions;
export const authSelector = (state: RootState) => state.auth;
const authReducer = authSlice.reducer;
export default authReducer;
