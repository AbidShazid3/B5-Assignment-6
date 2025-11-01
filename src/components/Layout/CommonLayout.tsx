import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ScrollToTop from "@/utils/ScrollToTop";

interface IProps {
    children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
    return (
        <div className="min-h-screen flex flex-col">
            <ScrollToTop />
            <Navbar />
            <div className="grow mt-16">{children}</div>
            <Footer />
        </div>
    );
};

export default CommonLayout;