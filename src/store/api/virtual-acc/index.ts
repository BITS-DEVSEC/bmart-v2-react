import { createApi } from "@reduxjs/toolkit/query/react";
import { VirtualAccountApiBase } from "../baseQueries";

export const VirtualAccSlice = createApi({
  reducerPath: "VirtualAccApi",
  baseQuery: VirtualAccountApiBase,
  endpoints: (builder) => ({
    getRequests: builder.query<any, void>({
      query: () => "/request_for_quotations",
    }),
  }),
});

export const { useGetRequestsQuery } = VirtualAccSlice;
