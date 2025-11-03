import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from "./ModeToggle";
import { Link, NavLink } from "react-router"
import { role } from "@/constants/role"
import BrandLogo from "./BrandLogo";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { authApi, useLogoutMutation } from "@/redux/features/auth/auth.api";
import { useAppDispatch } from "@/redux/hook";
import { toast } from "sonner";
import { Focus } from "lucide-react";

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
    { href: "/", label: "Home", role: "PUBLIC" },
    { href: "/about", label: "About", role: "PUBLIC" },
    { href: "/features", label: "Features", role: "PUBLIC" },
    { href: "/pricing", label: "Pricing", role: "PUBLIC" },
    { href: "/contact", label: "Contact", role: "PUBLIC" },
    { href: "/faq", label: "Faq", role: "PUBLIC" },
    { href: "/user", label: "Dashboard", role: role.USER },
    { href: "/admin", label: "Dashboard", role: role.ADMIN },
    { href: "/agent", label: "Dashboard", role: role.AGENT },
]

export default function Navbar() {
    const { data, isLoading } = useGetMeQuery(undefined);
    const [logout] = useLogoutMutation();
    const dispatch = useAppDispatch();

    const handleLogout = async () => {
        await logout(undefined);
        dispatch(authApi.util.resetApiState());
        toast.success('Logout successfully');
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md border-b border-gray-700 px-4">
            <div className="flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                <div className="flex items-center gap-2">
                    {/* Mobile menu trigger */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                className="md:hidden"
                                variant="ghost"
                                size="icon"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-full h-full">
                            <SheetHeader>
                                <SheetTitle>
                                    <BrandLogo />
                                </SheetTitle>
                                <SheetDescription>
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col h-full">
                                <nav className="flex flex-col items-center justify-center gap-3 text-lg font-medium">
                                    {navigationLinks.map((link, index) => {
                                        if (link.role === "PUBLIC" || link.role === data?.data?.role) {
                                            return (
                                                <NavLink
                                                    key={index}
                                                    to={link.href}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-primary font-semibold border-b-2 border-primary"
                                                            : "text-accent-foreground hover:text-primary"
                                                    }
                                                >
                                                    <SheetClose asChild>
                                                        <span>{link.label}</span>
                                                    </SheetClose>
                                                </NavLink>
                                            );
                                        }
                                        return null;
                                    })}
                                </nav>
                            </div>
                            <SheetFooter>
                                <SheetClose asChild>
                                    <Button className="cursor-pointer" size={"sm"}>Close</Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                    {/* Main nav */}
                    <div className="flex items-center gap-6">
                        <BrandLogo />
                        {/* Navigation menu */}
                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="md:gap-3 lg:gap-7 2xl:gap-10">
                                {navigationLinks.map((link, index) => {
                                    if (link.role === "PUBLIC" || link.role === data?.data?.role) {
                                        return (
                                            <NavigationMenuItem key={index}>
                                                <NavLink
                                                    to={link.href}
                                                    className={({ isActive }) =>
                                                        isActive
                                                            ? "text-white font-semibold border-b-2 border-white pb-1"
                                                            : "text-gray-400 hover:text-white transition-colors pb-1"
                                                    }
                                                >
                                                    {link.label}
                                                </NavLink>
                                            </NavigationMenuItem>
                                        )
                                    }
                                    return null
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    {isLoading ? (
                        <Focus className="animate-spin mx-auto text-white"/>
                    ) : data?.data?.phone ? (
                        <Button onClick={handleLogout} variant="outline" className="text-sm cursor-pointer">
                            Logout
                        </Button>
                    ) : (
                        <Button asChild className="text-sm">
                            <Link to="/login">Login</Link>
                        </Button>
                    )}

                </div>
            </div>
        </header>
    )
}