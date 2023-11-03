import { type TypeClubData } from "~/entities/const/content/clubsContent.type";
import { type Status } from "~/entities/type/api.type";

export type ContentState = {
  clubContent: {
    clubData: ClubData;
    partnersData: PartnersData;
    mainMapData: MainMapData;
    clubError: ErrorObjectContent | null;
    status: Status;
  };
};

export interface ErrorObjectContent {
  statusErr: string | number;
  detail: string;
  message: string;
}

export type PartnersData = {
  results: {
    id: number;
    name: string;
    img: string;
    url: string;
  }[];
  partnersError: ErrorObjectContent | null;
  status: Status;
};

export type MainMapData = {
  results: {
    id: number | null;
    mainMap: string;
  };
  partnersError: ErrorObjectContent | null;
  status: Status;
};

export interface ClubData {
  count?: number | string;
  next?: null;
  previous?: null;
  results: TypeClubData[] | [];
}

export interface PartnersDataResponse {
  count?: number | string;
  next?: null;
  previous?: null;
  results: {
    id: number;
    name: string;
    img: string;
    url: string;
  }[];
}

export interface MainMapDataResponse {
  id: number;
  mainMap: string;
}

export interface SendData {
  message: string;
}
