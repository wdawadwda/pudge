import { type Status, type ErrorObject } from "~/entities/type/api.type";

export type NewsState = {
  newsContent: {
    newsData: NewsData[] | null;
    newsError: ErrorObject | null;
    quantityNews: {
      quantityNews: number;
      newsError: ErrorObject | null;
      status: Status;
    };
    status: Status;
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
