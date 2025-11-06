import { baseApi } from "../baseApi";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyTransaction: builder.query({
            query: (params) => ({
                url: "/transaction/my-transaction",
                method: "GET",
                params: params
            }),
            providesTags: ['USER', 'TRANSACTION'],
        })
    })
})

export const {useGetMyTransactionQuery} = transactionApi