import { type MODAL_TYPES } from "./modal.const";

export type ModalType = (typeof MODAL_TYPES)[number];

export interface ModalProperties {
  type: ModalType;
}
