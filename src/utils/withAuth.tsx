import { useGetMeQuery } from "@/redux/features/user/user.api";
import type { TRole } from "@/types";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const { data, isLoading } = useGetMeQuery(undefined);
        if (isLoading) {
            return <div>Loading...</div>
        }

        if (!isLoading && !data?.data?.phone) {
            return <Navigate to={"/login"}/>
        }

        if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
            return <Navigate to={"/login"}/>
        }

        return <Component/>
    }
}