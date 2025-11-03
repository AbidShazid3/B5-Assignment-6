import AdminChangePass from "@/pages/Dashboard/Admin/AdminChangePass";
import AdminHome from "@/pages/Dashboard/Admin/AdminHome";
import AdminUpdateProfile from "@/pages/Dashboard/Admin/AdminUpdateProfile";
import AllUsers from "@/pages/Dashboard/Admin/AllUsers";
import type { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Dashboard Home",
                url: "/admin/dashboard",
                component: AdminHome,
            },
            {
                title: "Update Profile",
                url: "/admin/update-profile",
                component: AdminUpdateProfile,
            },
            {
                title: "Update Password",
                url: "/admin/update-password",
                component: AdminChangePass,
            },
        ],
    },
    {
        title: "User Management",
        items: [
            {
                title: "All Users",
                url: "/admin/all-users",
                component: AllUsers,
            },
        ],
    },
]