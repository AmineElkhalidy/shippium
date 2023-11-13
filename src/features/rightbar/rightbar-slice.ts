import { createSlice } from "@reduxjs/toolkit";

interface RightBarProps {
  isOpen: boolean;
  parcelShown?: any;
}

const initialState: RightBarProps = {
  isOpen: false,
};

const rightbarSlice = createSlice({
  name: "RightBar",
  initialState,
  reducers: {
    openRightbar: (state) => {
      state.isOpen = true;
    },

    closeRightbar: (state) => {
      state.isOpen = false;
    },
  },
});

export default rightbarSlice.reducer;
export const { openRightbar, closeRightbar } = rightbarSlice.actions;
