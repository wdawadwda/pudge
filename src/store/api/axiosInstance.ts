import axiosCore, { type AxiosError, type AxiosResponse } from "axios";

import { PUDGE_TEST_API_URL } from "~/entities/const/url.const";
import { type JWTTokens, type Access } from "~/entities/type/api.type";

export const axiosAuthorizationInstance = axiosCore.create();

export let accessToken = localStorage.getItem("@pudge/access-token");
export const refreshToken = localStorage.getItem("@pudge/refresh-token");

export function updateTokens(payload: JWTTokens) {
  accessToken = payload.access;
}

const MAX_RETRY_ATTEMPTS = 1;

let retryCount = 0;

const handleRequestError = async (error: AxiosError) => {
  if (
    error.response &&
    error.response.status === 401 &&
    refreshToken &&
    retryCount < MAX_RETRY_ATTEMPTS
  ) {
    retryCount++;
    try {
      const { data } = await axiosAuthorizationInstance.post<Access>(
        `${PUDGE_TEST_API_URL}api/v1/token/refresh/`,
        { refresh: refreshToken }
      );
      const newAccessToken = data.access;
      localStorage.setItem("@pudge/access-token", newAccessToken);
      accessToken = newAccessToken;
      const originalRequest = error.config;
      if (originalRequest) {
        return axiosAuthorizationInstance(originalRequest);
      } else {
        throw new Error("Оригинальный запрос не найден");
      }
    } catch (refreshError) {
      localStorage.removeItem("@pudge/access-token");
      localStorage.removeItem("@pudge/refresh-token");
      throw refreshError;
    }
  }
  throw error;
};

axiosAuthorizationInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => handleRequestError(error)
);

axiosAuthorizationInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

axiosAuthorizationInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error) => handleRequestError(error)
);
