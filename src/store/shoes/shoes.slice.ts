import { createSlice } from "@reduxjs/toolkit";
import { shoes } from "../../data/data";
import { type ShoesState } from "./shoes.type";

const initialState: ShoesState = {
  shoes: shoes,
  selectedShoes: null,
};

export const shoesSlice = createSlice({
  name: "shoes",
  initialState,
  reducers: {
    setSelectedShoes: (state, action) => {
      state.selectedShoes =
        state.shoes.find((s) => s.id === action.payload) || null;
    },
  },
  extraReducers: (builder) => {},
});

export const { actions: shoesActions } = shoesSlice;
