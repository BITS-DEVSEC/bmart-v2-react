import { createApi } from "@reduxjs/toolkit/query/react";
import { FaydaBase } from "../baseQueries";
import { FaydaSchema } from "../../schema";

export const FaydaApiSlice = createApi({
  reducerPath: "FaydaApi",
  baseQuery: FaydaBase,
  endpoints: (builder) => ({
    getUserById: builder.query<FaydaSchema, number>({
      query: (id) => `/get_user/${id}`,
    }),    
  }),
});

export const { useLazyGetUserByIdQuery } = FaydaApiSlice;
