import AllTransaction from "@/pages/Dashboard/Admin/AllTransaction";
import AllWallet from "@/pages/Dashboard/Admin/AllWallet";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AdminHome = lazy(() => import("@/pages/Dashboard/Admin/AdminHome"))
const AdminUpdateProfile = lazy(() => import("@/pages/Dashboard/Admin/AdminUpdateProfile"))
const AdminChangePass = lazy(() => import("@/pages/Dashboard/Admin/AdminChangePass"))
const AllUsers = lazy(() => import("@/pages/Dashboard/Admin/AllUsers"))
const AllAgent = lazy(() => import("@/pages/Dashboard/Admin/AllAgent"))

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
                title: "All User",
                url: "/admin/all-user",
                component: AllUsers,
            },
            {
                title: "All Agent",
                url: "/admin/all-agent",
                component: AllAgent,
            },
            {
                title: "All Wallet",
                url: "/admin/all-wallet",
                component: AllWallet,
            },
            {
                title: "All Transaction",
                url: "/admin/all-transaction",
                component: AllTransaction,
            },
        ],
    },
]