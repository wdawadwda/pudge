import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { PUDGE_API_URL } from "../../entities/const/api/url.const";
import { ErrorDetail } from "../../entities/const/api/api.type";
import { createErrorObject } from "./api.utils";
import { ClubData } from "../content/content.types";
import { contentActions } from "../content/content.slice";

export const fetchClubContent = createAsyncThunk(
  "content/fetchClubContent",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<ClubData>(
        `${PUDGE_API_URL}/collect_club/`,
      );
      return response.data;
    } catch (error) {
      const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
      thunkAPI.dispatch(contentActions.setError(errorObject));
      throw errorObject;
    }
  },
);
