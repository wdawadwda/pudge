import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type AxiosError } from "axios";

import { PUDGE_API_URL } from "~/entities/const/url.const";
import { type ErrorDetail } from "~/entities/type/api.type";

import { createErrorObject } from "./api.utils";
import { galleryActions } from "../gallery/gallery.slice";
import {
  type GetGalleryClubsResponse,
  type GalleryData,
  type GalleryDataResponse,
} from "../gallery/gallery.types";

export async function sendGalleryData(formData: FormData) {
  try {
    const response = await axios.post<GalleryDataResponse>(
      `${PUDGE_API_URL}/gallery-updated/`,
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

export const getGalleryClubs = createAsyncThunk(
  "gallery/getGalleryClubs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<GetGalleryClubsResponse>(
        `${PUDGE_API_URL}/get-clubs/`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(galleryActions.setError(errorObject));
      throw errorObject;
    }
  }
);

export const getGalleryData = createAsyncThunk(
  "gallery/getGalleryData",
  async (
    parameters: { page: number; clubName: string; perPage: number },
    thunkAPI
  ) => {
    try {
      const { page, clubName, perPage = 12 } = parameters;

      const limit = perPage;
      const offset = (page - 1) * perPage;

      const response = await axios.get<GalleryData>(
        `${PUDGE_API_URL}/gallery-updated/?offset=${offset}&limit=${limit}&club_name=${clubName}`
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(galleryActions.setError(errorObject));
      throw errorObject;
    }
  }
);

export async function getGalleryDataById(id: number): Promise<{
  id: number;
  img: string;
  text: string;
  id_object: number;
}> {
  try {
    const response = await axios.get<{
      id: number;
      img: string;
      text: string;
      id_object: number;
    }>(`${PUDGE_API_URL}/gallery-updated/?id=${id}`);
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function deleteGalleryDataById(id: number): Promise<void> {
  try {
    await axios.delete(`${PUDGE_API_URL}/gallery-updated/${id}`);
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function deleteAllPhotosByClubName(
  clubName: string
): Promise<void> {
  try {
    await axios.get(
      `${PUDGE_API_URL}/gallery-updated?delete_club_name=${clubName}`
    );
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}
