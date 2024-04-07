import { configureStore } from "@reduxjs/toolkit";
import switchTheme from "./reducers/switchTheme";

export const store = configureStore({
  reducer: {
    switch: switchTheme,
  },
});
