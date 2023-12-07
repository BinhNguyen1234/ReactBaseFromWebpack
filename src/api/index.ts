import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import AxiosAdapterFectchBaseQuery from './AdapterAxios'

const api = createApi({
    reducerPath: 'api/name',
    baseQuery: AxiosAdapterFectchBaseQuery({
        baseUrl: 'https://raw.githubusercontent.com/BinhNguyen1234/api/master'
    }),
    tagTypes: ['Name'],
    endpoints: (builder) => ({
        getName: builder.query({
            query: (url: string) => ({ url, method: 'get' }),
            providesTags: ['Name']
        }),
        postName: builder.query({
            query: () => ({ url: '', method: 'get' })
        })
    })
})

export const { useGetNameQuery, ...apiSlice } = api
