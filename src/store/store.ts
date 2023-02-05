import { configureStore } from "@reduxjs/toolkit";

//slices
import rightbarSlice from "../features/rightbar/rightbar-slice";
import authSlice from "../features/auth/auth-slice";

export const store = configureStore({
    reducer: {
        rightbar: rightbarSlice,
        auth: authSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
