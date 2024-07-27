import { createSlice } from "@reduxjs/toolkit";

type ThemeState = "lightTheme" | "darkTheme";

const initialState: { value: ThemeState } = {
 value: "lightTheme",
};

const themeSlice = createSlice({
 name: "theme",
 initialState,
 reducers: {
  toggleTheme: (state) => {
   state.value = state.value === "lightTheme" ? "darkTheme" : "lightTheme";
  },
 },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
