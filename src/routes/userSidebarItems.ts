
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const UserHome = lazy(() => import("@/pages/Dashboard/User/UserHome"))
const UserUpdateProfile = lazy(() => import("@/pages/Dashboard/User/UserUpdateProfile"))
const UserChangePass = lazy(() => import("@/pages/Dashboard/User/UserChangePass"))

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Dashboard Home",
                url: "/user/dashboard",
                component: UserHome,
            },
            {
                title: "Update Profile",
                url: "/user/update-profile",
                component: UserUpdateProfile,
            },
            {
                title: "Update Password",
                url: "/user/update-password",
                component: UserChangePass,
            },
        ],
    },
]