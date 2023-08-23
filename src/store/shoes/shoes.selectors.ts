import { type RootState } from "../store.types";

export const selectShoes = (state: RootState) => state.shoes.shoes;

export const selectSelectedShoes = (state: RootState) =>
  state.shoes.selectedShoes;
