import { createApi } from "@reduxjs/toolkit/query/react";
import { AuthApiBase } from "../baseQueries";

export const AuthApiSlice = createApi({
  reducerPath: "AuthApi",
  baseQuery: AuthApiBase,
  endpoints: (builder) => ({
    signUp: builder.mutation<any, any>({
      query: (body) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = AuthApiSlice;
