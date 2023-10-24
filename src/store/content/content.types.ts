import { type TypeClubData } from "~/entities/const/content/clubsContent.type";

export type ContentState = {
  clubContent: {
    clubData: ClubData;
    clubError: ErrorObjectContent | null;
    status: "idle" | "loading" | "success" | "error";
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
