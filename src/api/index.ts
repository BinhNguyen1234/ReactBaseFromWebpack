import { BaseQueryFn, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://raw.githubusercontent.com/BinhNguyen1234/api/master' }),
    tagTypes: ['Name'],
    endpoints: builder => ({
      getName: builder.query({
        query: (url: string) => url,
        providesTags: ['Name']
      }),
      postName: builder.query({
        query: ()=> ''
      })
    })
})
let a =5;

export const { useGetNameQuery, ...apiSlice } = api