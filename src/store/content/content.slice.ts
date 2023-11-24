import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  ContentState,
  ErrorObjectContent,
  TypeBookingData,
} from "./content.types";
import { fetchClubContent, fetchMainMap } from "../api/contentApi";

const initialState: ContentState = {
  clubContent: {
    clubData: {
      results: [],
    },
    selectedClub: null,
    bookingClub: null,
    clubError: null,
    status: "idle",
    mainMapData: {
      results: { id: null, mainMap: "" },
      partnersError: null,
      status: "idle",
    },
  },
};

export const contentSlice = createSlice({
  name: "content",
  initialState: initialState,
  reducers: {
    setBookingData: (state, action: PayloadAction<TypeBookingData>) => {
      state.clubContent.bookingClub = action.payload;
    },
    setSelectedClub: (state, action: PayloadAction<number>) => {
      state.clubContent.selectedClub =
        state.clubContent.clubData.results.find(
          (club) => club.id === action.payload,
        ) || null;
    },
    setError: (state, action: PayloadAction<ErrorObjectContent | null>) => {
      state.clubContent.status = "error";
      state.clubContent.clubError = action.payload;
    },
    clearError: (state) => {
      state.clubContent.status = "idle";
      state.clubContent.clubError = null;
    },
    setErrorMainMap: (
      state,
      action: PayloadAction<ErrorObjectContent | null>,
    ) => {
      state.clubContent.mainMapData.status = "error";
      state.clubContent.mainMapData.partnersError = action.payload;
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
