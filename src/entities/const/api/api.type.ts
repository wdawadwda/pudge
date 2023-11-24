export type ErrorDetail = {
  detail: string;
};

export type Status = "idle" | "loading" | "success" | "error";

export type BookingResponse = {
  message: string;
};

export interface MainMapDataResponse {
  id: number;
  mainMap: string;
}
