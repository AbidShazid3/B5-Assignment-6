import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addMoney: builder.mutation({
            query: (data) => ({
                url: "/wallet/add-money",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ['USER'],
        }),
        withdrawMoney: builder.mutation({
            query: (data) => ({
                url: "/wallet/withdraw",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ['USER'],
        }),
        sendMoney: builder.mutation({
            query: (data) => ({
                url: "/wallet/send-money",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ['USER'],
        }),
        cashOut: builder.mutation({
            query: (data) => ({
                url: "/wallet/cash-out",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ['USER'],
        }),
        cashIn: builder.mutation({
            query: (data) => ({
                url: "/wallet/cash-in",
                method: "POST",
                data: data,
            }),
            invalidatesTags: ['USER'],
        }),
    })
})

export const { useAddMoneyMutation,
    useWithdrawMoneyMutation,
    useSendMoneyMutation,
    useCashOutMutation,
    useCashInMutation,
} = walletApi