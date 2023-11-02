import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type AxiosError, type AxiosResponse } from "axios";
import axiosCore from "axios";

import { PUDGE_TEST_API_URL } from "~/entities/const/url.const";
import {
  type JWTTokens,
  type EmailConfirmRequest,
  type SignUpApiRequest,
  type CreateTokenPayload,
  type ErrorDetail,
  type User,
} from "~/entities/type/api.type";

import { createErrorObject } from "./api.utils";
import { axiosAuthorizationInstance } from "./axiosInstance";
import { userActions } from "../user/user.slice";

export async function registerUser(signUpData: SignUpApiRequest) {
  try {
    const response = await axios.post(
      `${PUDGE_TEST_API_URL}auth/users/`,
      signUpData
    );
    return response.data as string;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export async function emailConfirmation(uidToken: EmailConfirmRequest) {
  try {
    const response = await axios.post(
      `${PUDGE_TEST_API_URL}auth/users/activation/`,
      uidToken
    );
    return response.data as string;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}

export const createTokens = createAsyncThunk<
  JWTTokens,
  CreateTokenPayload,
  {
    rejectValue: ErrorDetail;
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
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    thunkAPI.dispatch(userActions.setError(errorObject));
    throw error;
  }
});

export const fetchUser = createAsyncThunk(
  "user/fetch",
  async function (_, thunkAPI) {
    const { data } = await axiosAuthorizationInstance.get<User>(
      `${PUDGE_TEST_API_URL}auth/users/me/`,
      {
        signal: thunkAPI.signal,
      }
    );

    return data;
  }
);
