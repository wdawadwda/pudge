import { type RootState } from "../store.types";

export const selectModal = (state: RootState) => state.modal;

export const selectIsShowModal = (state: RootState) => state.modal.isShowModal;
