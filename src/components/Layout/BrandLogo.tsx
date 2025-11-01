import { Wallet } from "lucide-react";
import { Link } from "react-router";
const BrandLogo = () => {
    return (
        <Link
            to="/"
            className="flex flex-col items-center text-center space-y-1 text-primary transition-all duration-300 hover:scale-105"
        >
            <div className="group flex items-center justify-center gap-2">
                <h1
                    className="text-2xl md:text-3xl font-extrabold tracking-wide bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    PayNex
                </h1>
                <Wallet
                    className="w-5 h-5 text-muted-foreground transition-colors duration-300 group-hover:text-indigo-500"
                />
            </div>
        </Link>
    );
};

export default BrandLogo;
