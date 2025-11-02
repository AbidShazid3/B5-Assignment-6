import { baseApi } from "@/redux/baseApi";


export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (userInfo) => ({
                url: "/user/register",
                method: "POST",
                data: userInfo,
            }),
        }),
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
            providesTags: ['USER'],
        }),
        getSingleUser: builder.query({
            query: (id) => ({
                url: `/user/${id}`,
                method: "GET",
            }),
            providesTags: ['USER'],
        }),
        updateUser: builder.mutation({
            query: (userInfo) => ({
                url: "/user/update",
                method: "PUT",
                data: userInfo
            }),
            invalidatesTags: ['USER'],
        }),

    })
})

export const { useRegisterMutation,
    useGetMeQuery,
    useGetSingleUserQuery,
    useUpdateUserMutation,
} = userApi;