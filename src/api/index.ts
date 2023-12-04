import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
            query: () => ''
        })
    })
})

export const { useGetNameQuery, ...apiSlice } = api
