import App from "@/App";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import AboutPage from "@/pages/AboutPage/AboutPage";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/Faq/Faq";

import FeaturePage from "@/pages/Feature/FeaturePage";
import Homepage from "@/pages/Homepage/Homepage";
import Login from "@/pages/Login/Login";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing/Pricing";
import Register from "@/pages/Register/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { agentSidebarItems } from "./agentSidebarItems";
import { userSidebarItems } from "./userSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                Component: Homepage
            },
            {
                path: "about",
                Component: AboutPage
            },
            {
                path: "features",
                Component: FeaturePage
            },
            {
                path: "pricing",
                Component: Pricing
            },
            {
                path: "contact",
                Component: Contact
            },
            {
                path: "faq",
                Component: Faq
            },
        ]
    },
    {
        path: "/admin",
        Component: withAuth(DashboardLayout, role.ADMIN as TRole),
        children: [{ index: true, element: <Navigate to={"/admin/dashboard"} /> }, ...generateRoutes(adminSidebarItems)]
    },
    {
        path: "/agent",
        Component: withAuth(DashboardLayout, role.AGENT as TRole),
        children: [{ index: true, element: <Navigate to={"/agent/dashboard"} /> }, ...generateRoutes(agentSidebarItems)]
    },
    {
        path: "/user",
        Component: withAuth(DashboardLayout, role.USER as TRole),
        children: [{ index: true, element: <Navigate to={"/user/dashboard"} /> },...generateRoutes(userSidebarItems)]
    },
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/register",
        Component: Register
    },
])