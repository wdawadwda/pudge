import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

import { type ErrorObjectContent, type ContentState } from "./content.types";
import {
  fetchClubContent,
  fetchMainMap,
  fetchPartnersContent,
} from "../api/contentApi";

const initialState: ContentState = {
  clubContent: {
    clubData: {
      results: [],
    },
    partnersData: {
      results: [],
      partnersError: null,
      status: "idle",
    },
    mainMapData: {
      results: { id: null, mainMap: "" },
      partnersError: null,
      status: "idle",
    },
    clubError: null,
    status: "idle",
  },
};

export const contentSlice = createSlice({
  name: "content",
  initialState: initialState,
  reducers: {
    setError: (state, action: PayloadAction<ErrorObjectContent | null>) => {
      state.clubContent.status = "error";
      state.clubContent.clubError = action.payload;
    },
    clearError: (state) => {
      state.clubContent.status = "idle";
      state.clubContent.clubError = null;
    },
    setErrorPartners: (
      state,
      action: PayloadAction<ErrorObjectContent | null>
    ) => {
      state.clubContent.partnersData.status = "error";
      state.clubContent.partnersData.partnersError = action.payload;
    },
    setErrorMainMap: (
      state,
      action: PayloadAction<ErrorObjectContent | null>
    ) => {
      state.clubContent.mainMapData.status = "error";
      state.clubContent.mainMapData.partnersError = action.payload;
    },
    clearErrorPartners: (state) => {
      state.clubContent.partnersData.status = "idle";
      state.clubContent.partnersData.partnersError = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchClubContent.fulfilled, (state, action) => {
      state.clubContent.status = "success";
      state.clubContent.clubData = action.payload;
    });

    builder.addCase(fetchClubContent.pending, (state) => {
      state.clubContent.status = "loading";
    });

    builder.addCase(fetchPartnersContent.fulfilled, (state, action) => {
      state.clubContent.partnersData.status = "success";
      state.clubContent.partnersData.results = action.payload.results;
    });

    builder.addCase(fetchPartnersContent.pending, (state) => {
      state.clubContent.partnersData.status = "loading";
    });

    builder.addCase(fetchMainMap.fulfilled, (state, action) => {
      state.clubContent.mainMapData.status = "success";
      state.clubContent.mainMapData.results = action.payload;
    });

    builder.addCase(fetchMainMap.pending, (state) => {
      state.clubContent.mainMapData.status = "loading";
    });
  },
});

export const { actions: contentActions } = contentSlice;
