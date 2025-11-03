import UserHome from "@/pages/Dashboard/User/UserHome";
import type { ISidebarItem } from "@/types";


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