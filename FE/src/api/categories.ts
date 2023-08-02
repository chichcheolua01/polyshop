import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ICategoryProduct } from "../interface";

type CategoriesResponse = {
  message: string;
  data: ICategoryProduct[];
};

export const categoryApi = createApi({
  reducerPath: "categories",
  tagTypes: ["Category"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<CategoriesResponse, void>({
      query: () => `/category`,
      providesTags: ["Category"],
    }),
    updateCategories: builder.mutation({
      query: (data: ICategoryProduct) => {
        const { _id, ...newData } = data;
        return {
          url: `/category/${_id}`,
          method: "PATCH",
          body: newData,
        };
      },
      invalidatesTags: ["Category"],
    }),
    deleteCategories: builder.mutation({
      query: (id: number) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useUpdateCategoriesMutation,
  useDeleteCategoriesMutation,
} = categoryApi;
