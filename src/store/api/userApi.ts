import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type AxiosError, type AxiosResponse } from "axios";
import axiosCore from "axios";

import { PUDGE_TEST_API_URL } from "~/entities/const/url.const";
import {
  type JWTTokens,
  type EmailConfirmRequest,
  type SignUpApiRequest,
  type CreateTokenPayload,
  type ErrorCreateToken,
  type User,
} from "~/entities/type/api.type";

import { accessToken, axiosAuthorizationInstance } from "./axiosInstance";
import { userActions } from "../user/user.slice";

export function registerUser(signUpData: SignUpApiRequest) {
  return axios
    .post(`${PUDGE_TEST_API_URL}auth/users/`, signUpData)
    .then((response) => response.data as string)
    .catch((error) => {
      throw error;
    });
}

export function emailConfirmation(uidToken: EmailConfirmRequest) {
  return axios
    .post(`${PUDGE_TEST_API_URL}auth/users/activation/`, uidToken)
    .then((response) => response.data as string)
    .catch((error) => {
      throw error;
    });
}

export const createTokens = createAsyncThunk<
  JWTTokens,
  CreateTokenPayload,
  {
    rejectValue: ErrorCreateToken;
  }
>("user/createTokens", async function (payload: CreateTokenPayload, thunkAPI) {
  try {
    const response = await axiosCore.post<
      JWTTokens,
      AxiosResponse<JWTTokens>,
      CreateTokenPayload
    >(`${PUDGE_TEST_API_URL}api/v1/token/`, payload, {
      signal: thunkAPI.signal,
    });
    return response.data;
  } catch (error: unknown) {
    const axiosError = error as AxiosError<ErrorCreateToken>;
    const errorStatus = axiosError.response?.status || "";
    const errorData = JSON.stringify(axiosError.response?.data.detail) || "";
    const errorMassage = axiosError.message || "";
    const errorObject = {
      statusErr: errorStatus,
      detail: errorData,
      message: errorMassage,
    };
    thunkAPI.dispatch(userActions.setError(errorObject));
    throw error;
  }
});

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async function (_, thunkAPI) {
    if (!accessToken) {
      throw new Error("Unauthorized");
    }
    const { data } = await axiosAuthorizationInstance.get<User>(
      `${PUDGE_TEST_API_URL}auth/users/me/`,
      {
        signal: thunkAPI.signal,
      }
    );

    return data;
  }
);
