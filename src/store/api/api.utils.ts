import { type AxiosError } from "axios";

import { type ErrorDetail } from "~/entities/type/api.type";

export function createErrorObject(error: AxiosError<ErrorDetail>) {
  const errorStatus = error.response?.status || "";
  const errorData = JSON.stringify(error.response?.data.detail) || "";
  const errorMassage = error.message || "";
  return {
    statusErr: errorStatus,
    detail: errorData,
    message: errorMassage,
  };
}
