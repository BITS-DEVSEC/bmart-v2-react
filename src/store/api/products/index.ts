import { createApi } from "@reduxjs/toolkit/query/react";
import { MarketPlaceApiBase } from "../baseQueries";

export const ProductsSlice = createApi({
  reducerPath: "ProductsApi",
  baseQuery: MarketPlaceApiBase,
  endpoints: (builder) => ({
    getProducts: builder.query<any, void>({
      query: () => "/products",
    }),
  }),
});

export const { useLazyGetProductsQuery } = ProductsSlice;
