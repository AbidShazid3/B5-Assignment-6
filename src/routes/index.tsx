import App from "@/App";
import AboutPage from "@/pages/AboutPage/AboutPage";
import Contact from "@/pages/Contact/Contact";
import Faq from "@/pages/Faq/Faq";

import FeaturePage from "@/pages/Feature/FeaturePage";
import NotFound from "@/pages/NotFound";
import Pricing from "@/pages/Pricing/Pricing";
import { createBrowserRouter } from "react-router";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <NotFound />,
        children: [
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
])