import { type TypeClubContacts } from "~/entities/const/content/clubsContent.type";
import { type ModalType } from "~/features/Modal/modal.type";

import { type GalleryItem } from "../gallery/gallery.types";

export type ModalState = {
  isShowModal: boolean;
  modalType: ModalType | null;
  content: Content | null;
};

export type Content =
  | ContentDell
  | ContentDellPhoto
  | Booking
  | ContentPhotoSlider;

export type Booking = {
  id: number;
  name: string;
  contacts: TypeClubContacts;
};

export type ContentDell = {
  contacts: TypeClubContacts;
  name: string;
  id: number;
};

export type ContentDellPhoto = {
  id: number;
  name: string;
};

export type ContentDellNews = {
  id: number;
  name: string;
};

export type ContentPhotoSlider = {
  index: number;
  data: GalleryItem[];
};
