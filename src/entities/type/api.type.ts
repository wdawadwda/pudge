export interface User {
  username: string;
  id: number;
  email: string;
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

export type ErrorCreateToken = {
  detail: string;
};

export interface Access {
  access: string;
}
