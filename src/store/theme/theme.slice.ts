import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  theme: "dark" | "light" | null;
};

const initialState: ThemeState = {
  theme: null,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
  extraReducers: (builder) => {},
});

export const { actions: themeActions } = themeSlice;
