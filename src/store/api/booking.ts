import axios, { type AxiosError } from "axios";

import { PUDGE_API_URL } from "~/entities/const/url.const";
import { type ErrorDetail } from "~/entities/type/api.type";

import { createErrorObject } from "./api.utils";
import { type BookingResponse } from "../booking/booking.types";

export async function booking(formData: FormData) {
  try {
    const response = await axios.post<BookingResponse>(
      `${PUDGE_API_URL}/reservation/`,
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
