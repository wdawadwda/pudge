export interface User {
  username: string;
  id: number;
  email: string;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  is_staff: boolean;
}

export type SignUpApiRequest = {
  email: string;
  username: string;
  password: string;
};

export type ErrorDetailSignUp = {
  username: string;
  email: string;
  password: string;
};

export type EmailConfirmRequest = {
  uid: string;
  token: string;
};

export type ErrorConfirm = {
  detail: string;
};

export interface CreateTokenPayload {
  email: string;
  password: string;
  username: string;
}

export interface JWTTokens {
  access: string;
  refresh: string;
}

export type ErrorDetail = {
  detail: string;
};

export interface Access {
  access: string;
}

export interface ErrorObject {
  statusErr: string | number;
  detail: string;
  message: string;
}

export type Status = "idle" | "loading" | "success" | "error";
