
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const AgentHome = lazy(() => import("@/pages/Dashboard/Agent/AgentHome"))
const AgentUpdateProfile = lazy(() => import("@/pages/Dashboard/Agent/AgentUpdateProfile"))
const AgentChangePass = lazy(() => import("@/pages/Dashboard/Agent/AgentChangePass"))

export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Dashboard Home",
                url: "/agent/dashboard",
                component: AgentHome,
            },
            {
                title: "Update Profile",
                url: "/agent/update-profile",
                component: AgentUpdateProfile,
            },
            {
                title: "Update Password",
                url: "/agent/update-password",
                component: AgentChangePass,
            },
        ],
    },
]