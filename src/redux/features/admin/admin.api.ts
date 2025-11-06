import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: (params) => ({
                url: "/admin/users",
                method: "GET",
                params: params
            }),
            providesTags: ['USER'],
        }),
        getAllAgent: builder.query({
            query: (params) => ({
                url: "/admin/agents",
                method: "GET",
                params: params
            }),
            providesTags: ['USER'],
        }),
        getAllWallet: builder.query({
            query: (params) => ({
                url: "/admin/wallets",
                method: "GET",
                params: params
            }),
            providesTags: ['USER'],
        }),
        getAllTransaction: builder.query({
            query: (params) => ({
                url: "/admin/transactions",
                method: "GET",
                params: params
            }),
            providesTags: ['USER'],
        }),
        updateUserStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/admin/status/${id}`,
                method: "PATCH",
                data: status,
            }),
            invalidatesTags: ['USER'],
        }),
        updateWalletStatus: builder.mutation({
            query: ({ id, status }) => ({
                url: `/admin/wallets/status/${id}`,
                method: "PATCH",
                data: status,
            }),
            invalidatesTags: ['USER'],
        }),
    })
})

export const { useGetAllUserQuery,
    useGetAllAgentQuery,
    useGetAllWalletQuery,
    useGetAllTransactionQuery,
    useUpdateUserStatusMutation,
    useUpdateWalletStatusMutation,
} = adminApi