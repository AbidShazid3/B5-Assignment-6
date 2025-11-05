import { baseApi } from "../baseApi";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getMyTransaction: builder.query({
            query: () => ({
                url: "/transaction/my-transaction",
                method: "GET",
            }),
            providesTags: ['USER', 'TRANSACTION'],
        })
    })
})

export const {useGetMyTransactionQuery} = transactionApi