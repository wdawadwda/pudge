export interface SetBodyOverflowPayload {
  bodyOverflow: "auto" | "hidden";
}

export type ModalState = {
  isShowModal: boolean;
  bodyOverflow: SetBodyOverflowPayload["bodyOverflow"];
};
