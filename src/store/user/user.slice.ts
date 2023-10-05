import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type JWTTokens } from "~/entities/type/api.type";

import { type ErrorObject, type UserSlice } from "./user.types";
import { createTokens, fetchUser } from "../api/userApi";

const getInitialState = (): UserSlice => {
  const access = localStorage.getItem("@pudge/access-token");
  const refresh = localStorage.getItem("@pudge/refresh-token");

  return {
    currentUser: { status: "idle" },
    tokens:
      access && refresh
        ? { status: "success", data: { access, refresh } }
        : { status: "idle" },
    error: null,
  };
};

export const userSlice = createSlice({
  name: "user",
  initialState: getInitialState,
  reducers: {
    logout: (state) => {
      state.currentUser = { status: "idle" };
    },
    setError: (state, action: PayloadAction<ErrorObject | null>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.currentUser = { status: "loading" };
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.currentUser = { status: "success", data: action.payload };
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      if (action.error.name === "AbortError") {
        return;
      }
      state.currentUser = {
        status: "error",
        error: action.error.message || "Something went wrong",
      };
    });

    builder.addCase(createTokens.pending, (state) => {
      state.tokens = { status: "loading" };
    });
    builder.addCase(
      createTokens.fulfilled,
      (state, action: PayloadAction<JWTTokens>) => {
        state.tokens = { status: "success", data: action.payload };
      }
    );
    builder.addCase(createTokens.rejected, (state, action) => {
      if (action.error.name === "AbortError") {
        return;
      }
      state.tokens = {
        status: "error",
        error: action.error.message || "Something went wrong",
      };
    });
  },
});

export const { actions: userActions } = userSlice;
