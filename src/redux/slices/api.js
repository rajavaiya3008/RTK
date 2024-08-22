import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonServerApi = createApi({
  reducerPath: "jsonServerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => `users`,
      providesTags:['Users']
    }),
    // getPost: builder.query({
    //   queryFn: async (arg, queryApi, extraOptions) => {
    //     await new Promise((resolve) => setTimeout(resolve, 10000)); // 10-second delay
    //     const response = await fetch(
    //       "https://jsonplaceholder.typicode.com/posts/1"
    //     );
    //     const data = await response.json();
    //     return { data };
    //   },
    // }),
    getPost: builder.query({
        query: () => 'posts',
        providesTags:['Posts']
    }),
    addPost: builder.mutation({
      query:(body) => ({
        url:'/posts',
        method:'POST',
        body
      }),
      invalidatesTags:['Posts']
    })
  }),
});

export const { useGetUserQuery, useGetPostQuery ,useAddPostMutation} = jsonServerApi;
