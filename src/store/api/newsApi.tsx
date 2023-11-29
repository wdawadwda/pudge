import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { PUDGE_API_URL } from "../../entities/const/api/url.const";
import { newsActions } from "../news/news.slice";
import { createErrorObject } from "./api.utils";
import { ErrorDetail } from "../../entities/const/api/api.type";
import { GetQuantityNewsResponse, NewsData } from "../news/news.types";

export const getQuantityNews = createAsyncThunk(
  "news/getQuantityNews",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<GetQuantityNewsResponse>(
        `${PUDGE_API_URL}/news-count/`,
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(newsActions.setErrorquantityNews(errorObject));
      throw errorObject;
    }
  },
);

export const getNewsData = createAsyncThunk(
  "news/getNewsData",
  async (parameters: { page: number; perPage: number }, thunkAPI) => {
    try {
      const { page, perPage = 12 } = parameters;

      const limit = perPage;
      const offset = (page - 1) * perPage;

      const response = await axios.get<NewsData[]>(
        `${PUDGE_API_URL}/news/?offset=${offset}&limit=${limit}`,
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(newsActions.setError(errorObject));
      throw errorObject;
    }
  },
);

export async function getNewsDataById(id: number): Promise<NewsData> {
  try {
    const response = await axios.get<NewsData>(`${PUDGE_API_URL}news/${id}`);
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function getNewsDataLast(): Promise<NewsData[]> {
  try {
    const response = await axios.get<NewsData[]>(`${PUDGE_API_URL}last-news/`);
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}
