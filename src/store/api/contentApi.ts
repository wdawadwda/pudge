import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type AxiosError } from "axios";

import { type ClubRequestType } from "~/entities/const/content/clubsContent.type";
import { PUDGE_TEST_API_URL } from "~/entities/const/url.const";
import { type ErrorDetail } from "~/entities/type/api.type";

import { createErrorObject } from "./api.utils";
import { contentActions } from "../content/content.slice";
import { type ClubData } from "../content/content.types";

export const fetchClubContent = createAsyncThunk(
  "content/fetchClubContent",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ClubData>(
        `${PUDGE_TEST_API_URL}/collect_club/`
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
    const response = await axios.post<ClubData>(
      `${PUDGE_TEST_API_URL}/collect_club/`,
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
    const response = await axios.post<ClubData>(
      `${PUDGE_TEST_API_URL}/collect_club/`,
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
    await axios.delete(`${PUDGE_TEST_API_URL}/collect_club/${pk}/`);
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}
