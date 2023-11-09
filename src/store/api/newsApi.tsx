import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type AxiosError } from "axios";

import { PUDGE_API_URL } from "~/entities/const/url.const";
import { type ErrorDetail } from "~/entities/type/api.type";

import { createErrorObject } from "./api.utils";
import { newsActions } from "../news/news.slice";
import {
  type NewsDataResponse,
  type GetQuantityNewsResponse,
  type NewsData,
} from "../news/news.types";

export async function sendNewsData(formData: FormData) {
  try {
    const response = await axios.post<NewsDataResponse>(
      `${PUDGE_API_URL}/news/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export const getQuantityNews = createAsyncThunk(
  "news/getQuantityNews",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<GetQuantityNewsResponse>(
        `${PUDGE_API_URL}/news-count/`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(newsActions.setErrorquantityNews(errorObject));
      throw errorObject;
    }
  }
);

export const getNewsData = createAsyncThunk(
  "news/getNewsData",
  async (parameters: { page: number; perPage: number }, thunkAPI) => {
    try {
      const { page, perPage = 12 } = parameters;

      const limit = perPage;
      const offset = (page - 1) * perPage;

      const response = await axios.get<NewsData[]>(
        `${PUDGE_API_URL}/news/?offset=${offset}&limit=${limit}`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(newsActions.setError(errorObject));
      throw errorObject;
    }
  }
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

export async function deleteNewsById(id: number): Promise<void> {
  try {
    await axios.delete(`${PUDGE_API_URL}news/${id}`);
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
