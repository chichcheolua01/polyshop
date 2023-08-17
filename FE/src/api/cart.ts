import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const cartApi = createApi({
  reducerPath: "cart",
  tagTypes: ["Cart"],
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
    getAllCart: builder.query<any, void>({
      query: () => `/cart`,
      providesTags: ["Cart"],
    }),
    getOneCart: builder.query<any, any>({
      query: (id) => `/cart/${id}`,
      providesTags: ["Cart"],
    }),
    addCart: builder.mutation<any, any>({
      query: (pro) => ({
        url: "/cart",
        method: "POST",
        body: pro,
      }),
      invalidatesTags: ["Cart"],
    }),
    removeCart: builder.mutation<any, { idCart: string; idPro: string }>({
      query: ({ idCart, idPro }) => {
        console.log({ idCart });
        console.log({ idPro });
        return {
          url: `/cart/${idCart}/${idPro}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Cart"],
    }),
    updateQuantity: builder.mutation<any, any>({
      query: (cart) => ({
        url: `/cart/${cart._id}`,
        method: "PATCH",
        body: cart,
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});
export const {
  useGetAllCartQuery,
  useGetOneCartQuery,
  useAddCartMutation,
  useRemoveCartMutation,
  useUpdateQuantityMutation,
} = cartApi;
export default cartApi;
