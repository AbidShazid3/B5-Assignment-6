import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: "/admin/users",
                method: "GET",
            }),
            providesTags: ['USER', 'ADMIN'],
        }),
        getAllAgent: builder.query({
            query: () => ({
                url: "/admin/agents",
                method: "GET",
            }),
            providesTags: ['USER', 'ADMIN'],
        }),
        getAllWallet: builder.query({
            query: () => ({
                url: "/admin/wallets",
                method: "GET",
            }),
            providesTags: ['USER', 'ADMIN'],
        }),
        getAllTransaction: builder.query({
            query: () => ({
                url: "/admin/transactions",
                method: "GET",
            }),
            providesTags: ['USER', 'ADMIN'],
        }),
    })
})

export const { useGetAllUserQuery,
    useGetAllAgentQuery,
    useGetAllWalletQuery,
    useGetAllTransactionQuery,
} = adminApi