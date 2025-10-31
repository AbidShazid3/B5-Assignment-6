import App from "@/App";
import AboutPage from "@/pages/AboutPage/AboutPage";
import FeaturePage from "@/pages/Feature/FeaturePage";
import NotFound from "@/pages/NotFound";
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
        ]
    }
])