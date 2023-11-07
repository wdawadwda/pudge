import { type Status, type ErrorObject } from "~/entities/type/api.type";

export type ContentState = {
  galleryContent: {
    galleryName: GalleryContent;
    galleryData: GalleryData;
    galleryError: ErrorObject | null;
    status: Status;
  };
};

type GalleryContent = {
  clubsGallery: string[];
  galleryTotalPhoto: { name: string; quantityPictures: string | number }[];
};

export type GalleryDataResponse = {
  message: string;
  detail: string;
};
export interface GalleryData {
  [clubName: string]: GalleryItem[];
}

export interface GalleryItem {
  id: number;
  img: string;
  date: string;
  text: string | null;
}

export type GetGalleryClubsResponse = {
  clubsGallery: string[];
  galeryTotalPhoto: { name: string; quantityPictures: number | string }[];
};
