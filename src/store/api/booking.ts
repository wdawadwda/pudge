import axios, { type AxiosError } from "axios";
import {
  BookingResponse,
  ErrorDetail,
} from "../../entities/const/api/api.type";
import { PUDGE_API_URL } from "../../entities/const/api/url.const";
import { createErrorObject } from "./api.utils";

export async function booking(formData: FormData) {
  try {
    const response = await axios.post<BookingResponse>(
      `${PUDGE_API_URL}/reservation/`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    );
    return response.data;
  } catch (error) {
    const errorObject = createErrorObject(error as AxiosError<ErrorDetail>);
    throw errorObject;
  }
}
