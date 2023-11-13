import { createSlice } from "@reduxjs/toolkit";

interface AuthProps {
  isAuth: boolean;
}

const initialState: AuthProps = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },

    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
