import { baseApi } from "@/redux/baseApi";


export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                data: userInfo,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['USER'],
        }),
        authPasswordReset: builder.mutation({
            query: (payload) => ({
                url: "/auth/reset-password",
                method: "POST",
                data: payload
            })
        }),
    })
})

export const { useLoginMutation,
    useLogoutMutation,
    useAuthPasswordResetMutation,
} = authApi