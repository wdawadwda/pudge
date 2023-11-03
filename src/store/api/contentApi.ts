import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type AxiosError } from "axios";

import {
  type MainMapRequest,
  type ClubRequestType,
} from "~/entities/const/content/clubsContent.type";
import { PUDGE_API_URL } from "~/entities/const/url.const";
import { type ErrorDetail } from "~/entities/type/api.type";

import { createErrorObject } from "./api.utils";
import { contentActions } from "../content/content.slice";
import {
  type SendData,
  type ClubData,
  type PartnersDataResponse,
  type MainMapDataResponse,
} from "../content/content.types";

export const fetchClubContent = createAsyncThunk(
  "content/fetchClubContent",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ClubData>(
        `${PUDGE_API_URL}/collect_club/`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(contentActions.setError(errorObject));
      throw errorObject;
    }
  }
);

export async function sendMainClubData(formData: FormData) {
  try {
    const response = await axios.post<SendData>(
      `${PUDGE_API_URL}/collect_club/`,
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

export async function sendClubData(formData: ClubRequestType) {
  try {
    const response = await axios.post<SendData>(
      `${PUDGE_API_URL}/collect_club/`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function deleteClub(pk: number) {
  try {
    await axios.delete(`${PUDGE_API_URL}/collect_club/${pk}/`);
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function sendPartner(formData: FormData) {
  try {
    const response = await axios.post<SendData>(
      `${PUDGE_API_URL}/partners/`,
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

export const fetchPartnersContent = createAsyncThunk(
  "content/fetchPartnersContent",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<PartnersDataResponse>(
        `${PUDGE_API_URL}/partners/`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(contentActions.setErrorPartners(errorObject));
      throw errorObject;
    }
  }
);

export async function deletePartner(pk: number) {
  try {
    await axios.delete(`${PUDGE_API_URL}/partners/${pk}/`);
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function sendMainMap(formData: MainMapRequest) {
  try {
    const response = await axios.post<SendData>(
      `${PUDGE_API_URL}/main-map/`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export const fetchMainMap = createAsyncThunk(
  "content/fetchMainMap",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<MainMapDataResponse>(
        `${PUDGE_API_URL}/main-map/`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(contentActions.setErrorPartners(errorObject));
      throw errorObject;
    }
  }
);
