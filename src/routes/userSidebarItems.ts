import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const UserHome = lazy(() => import("@/pages/Dashboard/User/UserHome"))

export const userSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Dashboard Home",
                url: "/user/dashboard",
                component: UserHome,
            },
            // {
            //     title: "Update Profile",
            //     url: "/user/update-profile",
            //     component: ,
            // },
            // {
            //     title: "Update Password",
            //     url: "/user/update-password",
            //     component: ,
            // },
        ],
    },
]