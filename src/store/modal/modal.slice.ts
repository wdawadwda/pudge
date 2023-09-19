import { createSlice } from "@reduxjs/toolkit";

import { type ModalState } from "./modal.type";

const getInitialState = (): ModalState => ({
  isShowModal: false,
});

export const modalSlice = createSlice({
  name: "modal",
  initialState: getInitialState(),
  reducers: {
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal;
    },
  },
});

export const { actions: modalActions } = modalSlice;
