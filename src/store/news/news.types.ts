import { Status } from "../../entities/const/api/api.type";
import { ErrorObjectContent } from "../content/content.types";

export type NewsState = {
  newsContent: {
    newsData: NewsData[] | null;
    newsError: ErrorObjectContent | null;
    quantityNews: {
      quantityNews: number;
      newsError: ErrorObjectContent | null;
      status: Status;
    };
    status: Status;
    selectNewsId: number | null;
  };
};

export type NewsData = {
  id: number;
  img: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
};

export type NewsDataResponse = {
  message: string;
  detail: string;
};

export type GetQuantityNewsResponse = {
  quantityNews: number;
};
