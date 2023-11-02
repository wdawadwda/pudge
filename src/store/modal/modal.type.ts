import { type TypeClubContacts } from "~/entities/const/content/clubsContent.type";
import { type ModalType } from "~/features/Modal/modal.type";

export type ModalState = {
  isShowModal: boolean;
  modalType: ModalType | null;
  content: TypeClubContacts | ContentDell | null;
};

export type Content = TypeClubContacts | ContentDell;

export type ContentDell = {
  id: number;
  name: string;
};
