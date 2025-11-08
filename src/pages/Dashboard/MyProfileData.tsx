import { useGetMeQuery } from "@/redux/features/user/user.api";
import { Mail, Phone, User, Wallet } from "lucide-react";


const MyProfileData = () => {
    const { data: userData } = useGetMeQuery(undefined);
    return (
        <div className="relative w-full lg:max-w-sm mx-auto p-6 rounded-3xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-blue-300 dark:border-blue-500/40 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 group overflow-hidden">

            {/* Animated Gradient Blobs */}
            <div className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-linear-to-r from-blue-300 via-purple-300 to-pink-300 opacity-20 blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-linear-to-r from-pink-300 via-purple-400 to-blue-400 opacity-20 blur-3xl animate-blob animation-delay-4000"></div>

            {/* Gradient Border Glow on Hover */}
            <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

            <div className="relative z-10 space-y-6">
                {/* Header: Balance */}
                <div className="flex justify-between items-center">
                    <h2 className="md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                        Current Balance
                    </h2>

                    <div className="flex items-center gap-2 md:text-2xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">
                        <Wallet size={22} className="text-blue-500 dark:text-blue-400" />
                        ৳ {userData?.data?.wallet?.balance.toFixed(2) || "00.00"}
                    </div>
                </div>

                <hr className="border-gray-200 dark:border-gray-700" />

                {/* User Info */}
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-3 hover:text-blue-500 transition-colors">
                        <User size={20} className="text-blue-500 dark:text-blue-400" />
                        <span className="font-medium">
                            {userData?.data?.name}{" "}
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                ({userData?.data?.role})
                            </span>
                        </span>
                    </div>

                    <div className="flex items-center gap-3 hover:text-green-500 transition-colors">
                        <Phone size={20} className="text-green-500 dark:text-green-400" />
                        <span>{userData?.data?.phone}</span>
                    </div>

                    <div className="flex items-center gap-3 hover:text-purple-500 transition-colors">
                        <Mail size={20} className="text-purple-500 dark:text-purple-400" />
                        <span>{userData?.data?.email || "Not Provided"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfileData;