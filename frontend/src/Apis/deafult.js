import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
 
// Define a service using a base URL and expected endpoints
export const JobcyAppApi = createApi({
  reducerPath: 'jobcyapi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_API_URL}/v1` }),
  endpoints: (builder) => ({

    getAllCategoriesWithJobs: builder.query({
      query: (name) => `pokemon/${name}`,
    }),

  }),
})

 