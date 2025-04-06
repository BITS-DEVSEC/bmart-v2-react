import { createApi } from "@reduxjs/toolkit/query/react";
import { MarketPlaceApiBase } from "../baseQueries";

export const RequestsSlice = createApi({
  reducerPath: "RequestsApi",
  baseQuery: MarketPlaceApiBase,
  endpoints: (builder) => ({
    getRequests: builder.query<any, void>({
      query: () => "/request_for_quotations",
    }),
  }),
});

export const { useGetRequestsQuery } = RequestsSlice;
