import { baseApi } from "@/redux/baseApi";

export const adminApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUser: builder.query({
            query: () => ({
                url: "/admin/users",
                method: "GET",
            }),
            providesTags: ['USER'],
        }),
        getAllAgent: builder.query({
            query: () => ({
                url: "/admin/agents",
                method: "GET",
            }),
            providesTags: ['USER'],
        }),
        getAllWallet: builder.query({
            query: () => ({
                url: "/admin/wallets",
                method: "GET",
            }),
            providesTags: ['USER'],
        }),
        getAllTransaction: builder.query({
            query: () => ({
                url: "/admin/transactions",
                method: "GET",
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
        })
    })
})

export const { useGetAllUserQuery,
    useGetAllAgentQuery,
    useGetAllWalletQuery,
    useGetAllTransactionQuery,
    useUpdateUserStatusMutation,
} = adminApi