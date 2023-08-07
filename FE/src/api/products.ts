import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IImageProduct, IProduct } from "../interface";

type ProductsResponse = {
  message: string;
  data: IProduct[];
};

type IProductData = {
  _id?: string;
  sold: number;
  stars: number;
  price: number;
  category: string | undefined;
  inventory: number;
  original_price: number;
  name: string;
  description: string;
  images: IImageProduct[] | undefined;
};

export const productApi = createApi({
  reducerPath: "products",
  tagTypes: ["Product"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080",
    prepareHeaders(headers) {
      const token = localStorage.getItem("token");

      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, void>({
      query: () => `/products`,
      providesTags: ["Product"],
    }),
    getOneProducts: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),
    addProducts: builder.mutation({
      query: (data: IProductData) => ({
        url: `/products`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProducts: builder.mutation({
      query: (data: IProductData) => {
        const { _id, ...newData } = data;
        return {
          url: `/products/${_id}`,
          method: "PATCH",
          body: newData,
        };
      },
      invalidatesTags: ["Product"],
    }),
    deleteProducts: builder.mutation({
      query: (id: string) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetOneProductsQuery,
  useAddProductsMutation,
  useUpdateProductsMutation,
  useDeleteProductsMutation,
} = productApi;
