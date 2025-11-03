import AgentHome from "@/pages/Dashboard/Agent/AgentHome";
import type { ISidebarItem } from "@/types";


export const agentSidebarItems: ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Dashboard Home",
                url: "/agent/dashboard",
                component: AgentHome,
            },
            // {
            //     title: "Update Profile",
            //     url: "/agent/update-profile",
            //     component: ,
            // },
            // {
            //     title: "Update Password",
            //     url: "/agent/update-password",
            //     component: ,
            // },
        ],
    },
]