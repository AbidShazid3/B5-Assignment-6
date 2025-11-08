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
        })
    })
})

export const { useAddMoneyMutation, } = walletApi