import { ArrowDownCircle, ArrowUpCircle } from "lucide-react";
import MyProfileData from "../MyProfileData";
import TransactionTable from "@/components/TransactionTable/TransactionTable";


const AccountAction = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 mt-5 px-4">
                <MyProfileData />
                <div className="w-full max-w-lg mx-auto bg-linear-to-br from-green-600 to-emerald-700 rounded-3x rounded-3xl p-4 shadow-xl border  border-green-500/30 text-white relative overflow-hidden">
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-6 text-yellow-200">
                        Account Action
                    </h2>

                    {/* Buttons Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Send Money */}
                        <button className="flex flex-col items-center justify-center bg-yellow-200 text-gray-900 rounded-2xl py-6 hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg group">
                            <ArrowDownCircle
                                size={50}
                                className="text-gray-900 mb-3 group-hover:translate-y-1 transition-transform duration-300"
                            />
                            <span className="font-semibold text-lg">Send Money</span>
                        </button>

                        {/* Cash Out */}
                        <button className="flex flex-col items-center justify-center bg-yellow-200 text-gray-900 rounded-2xl py-6 hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg group">
                            <ArrowUpCircle
                                size={50}
                                className="text-gray-900 mb-3 group-hover:-translate-y-1 transition-transform duration-300"
                            />
                            <span className="font-semibold text-lg">Cash Out</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <TransactionTable/>
            </div>
        </div>
    );
};

export default AccountAction;