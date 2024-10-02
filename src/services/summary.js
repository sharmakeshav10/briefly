import { createApi } from "@reduxjs/toolkit/query/react";

export const summaryApi = createApi({
  reducerPath: "summaryApi",
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) => "test",
    }),
  }),
});
