import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://spotify-scraper.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        // "67f436ea87msh63c3582447b58ebp153cecjsne2e8bd116dd0"
        "4f357e93a4msh206d7977649c51fp172ff7jsnc472bcb08bc8"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => "/chart/tracks/top" }),
    getArtist: builder.query({ query: () => "/chart/artists/top" }),
  }),
});
export const { useGetTopChartsQuery } = shazamCoreApi;
export const { useGetArtistQuery } = shazamCoreApi;
