import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AdminHome = lazy(() => import("@/pages/Dashboard/Admin/AdminHome"))
const AdminUpdateProfile = lazy(() => import("@/pages/Dashboard/Admin/AdminUpdateProfile"))
const AdminChangePass = lazy(() => import("@/pages/Dashboard/Admin/AdminChangePass"))
const AllUsers = lazy(() => import("@/pages/Dashboard/Admin/AllUsers"))

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