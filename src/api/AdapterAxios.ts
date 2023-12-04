import {
    BaseQueryFn,
    QueryReturnValue
} from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/react'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

let AxiosAdapterFectchBaseQuery = (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
): BaseQueryFn<{
    url: string
    method: AxiosRequestConfig['method']
    data?: AxiosRequestConfig['data']
    params?: AxiosRequestConfig['params']
    headers?: AxiosRequestConfig['headers']
}> => {
    return async ({ url, method, data, params, headers }) => {
        try {
            const result = await axios({
                url: baseUrl + url,
                method,
                data,
                params,
                headers
            })
            return { data: result.data }
        } catch (axiosError) {
            const err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message
                }
            }
        }
    }
}
export default AxiosAdapterFectchBaseQuery
//https://raw.githubusercontent.com/BinhNguyen1234/api/master/info-mockup.json
