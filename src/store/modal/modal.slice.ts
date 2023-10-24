import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type ModalType } from "~/features/Modal/modal.type";

import { type Content, type ModalState } from "./modal.type";

const getInitialState = (): ModalState => ({
  isShowModal: false,
  modalType: null,
  content: null,
});

export const modalSlice = createSlice({
  name: "modal",
  initialState: getInitialState(),
  reducers: {
    toggleModal: (state, action: PayloadAction<ModalType | null>) => {
      state.isShowModal = !state.isShowModal;
      state.modalType = action.payload;
      if (!state.isShowModal) {
        state.content = null;
      }
    },
    setContent: (state, action: PayloadAction<Content>) => {
      state.content = action.payload;
    },
  },
});

export const { actions: modalActions } = modalSlice;
