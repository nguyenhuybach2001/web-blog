import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modeTheme: true,
};

export const switchTheme = createSlice({
  name: "switch",
  initialState,
  reducers: {
    switchMode: (state, action) => {
      state.modeTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { switchMode } = switchTheme.actions;

export default switchTheme.reducer;
