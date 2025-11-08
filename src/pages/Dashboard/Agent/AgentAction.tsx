import AddMoneyModal from "@/components/modules/WalletService/AddMoneyModal";
import CashInModal from "@/components/modules/WalletService/CashInModal";


const AgentAction = () => {
    return (
        <div className="grid grid-cols-2 gap-5 w-full">
            {/* Add Money */}
            <AddMoneyModal />

            {/* Cash In */}
            <CashInModal />
        </div>
    );
};

export default AgentAction;