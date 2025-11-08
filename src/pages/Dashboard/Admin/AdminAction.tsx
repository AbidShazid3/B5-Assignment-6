import AddMoneyModal from "@/components/modules/WalletService/AddMoneyModal";
import { FileSignature } from "lucide-react";


const AdminAction = () => {
    return (
        <div className="grid grid-cols-2 gap-5 w-full">
            {/* Add Money */}
            <AddMoneyModal />

            {/* Cash In */}
            <button className="flex flex-col items-center justify-center bg-yellow-200 text-gray-900 rounded-2xl p-4 hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg group w-full cursor-pointer">
                <FileSignature
                    size={50}
                    className="text-gray-900 mb-3 group-hover:-translate-y-1 transition-transform duration-300"
                />
                <span className="font-semibold text-base">Coming Soon</span>
            </button>
        </div>
    );
};

export default AdminAction;