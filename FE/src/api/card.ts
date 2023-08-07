import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardApi = createApi({
  reducerPath: "card",
  tagTypes: ["Card"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    addCards: builder.mutation({
      query: (data) => ({
        url: `/card`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Card"],
    }),
  }),
});

export const { useAddCardsMutation } = cardApi;
