import { Status } from "../../entities/const/api/api.type";
import { TypeClubData } from "../../entities/const/clubsContent.type";

export type ContentState = {
  clubContent: {
    clubData: ClubData;
    selectedClub: TypeClubData | null;
    bookingClub: TypeBookingData | null;
    clubError: ErrorObjectContent | null;
    status: Status;
    mainMapData: MainMapData;
  };
};

export interface ErrorObjectContent {
  statusErr: string | number;
  detail: string;
  message: string;
}

export interface ClubData {
  count?: number | string;
  next?: null;
  previous?: null;
  results: TypeClubData[] | [];
}

export interface SendData {
  message: string;
}

export interface TypeBookingData {
  email: string;
  name: string;
}

export type MainMapData = {
  results: {
    id: number | null;
    mainMap: string;
  };
  partnersError: ErrorObjectContent | null;
  status: Status;
};
