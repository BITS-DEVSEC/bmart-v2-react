import {fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const FaydaBase = fetchBaseQuery({ baseUrl: import.meta.env.VITE_FAYDA_URL || "http://localhost:3000" })
export const AuthApiBase = fetchBaseQuery({ baseUrl: import.meta.env.VITE_AUTH_API_URL || "http://localhost:3000", timeout: 10000 })
export const MarketPlaceApiBase = fetchBaseQuery({ baseUrl: import.meta.env.VITE_MARKETPLACE_API_URL || "http://localhost:3000", timeout: 10000 })
export const VirtualAccountApiBase = fetchBaseQuery({ baseUrl: import.meta.env.VITE_VIRTUAL_ACCOUNT_API_URL || "http://localhost:3000" })