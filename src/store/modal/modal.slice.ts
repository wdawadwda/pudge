import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type ModalState, type SetBodyOverflowPayload } from "./modal.type";

const getInitialState = (): ModalState => ({
  isShowModal: false,
  bodyOverflow: "auto",
});

export const modalSlice = createSlice({
  name: "modal",
  initialState: getInitialState(),
  reducers: {
    toggleAside: (state) => {
      state.isShowModal = !state.isShowModal;
    },
    setBodyOverflow: (state, action: PayloadAction<SetBodyOverflowPayload>) => {
      state.bodyOverflow = action.payload.bodyOverflow;
    },
  },
});

export const { actions: modalActions } = modalSlice;
