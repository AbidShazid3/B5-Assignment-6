import AddMoneyModal from "@/components/modules/WalletService/AddMoneyModal";
import CashOutModal from "@/components/modules/WalletService/CashOutModal";
import SendMoneyModal from "@/components/modules/WalletService/SendMoneyModal";
import WithdrawMoneyModal from "@/components/modules/WalletService/WithdrawMoneyModal";


const UserAction = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
            {/* Add Money */}
            <AddMoneyModal />

            {/* withdraw money */}
            <WithdrawMoneyModal/>

            {/* Send Money */}
            <SendMoneyModal />

            {/* Cash Out */}
            <CashOutModal/>
        </div>
    );
};

export default UserAction;