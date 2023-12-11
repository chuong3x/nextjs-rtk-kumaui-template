import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/auth.slice";
import counterReducer from "./slices/counter.slice";
import textReducer from "./slices/text.slice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            auth: authReducer,
            counter: counterReducer,
            text: textReducer,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
