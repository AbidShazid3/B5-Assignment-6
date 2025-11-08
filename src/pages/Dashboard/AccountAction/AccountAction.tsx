import MyProfileData from "../MyProfileData";
import TransactionTable from "@/components/TransactionTable/TransactionTable";
import UserAction from "../User/UserAction";
import { useGetMeQuery } from "@/redux/features/user/user.api";
import { role } from "@/constants/role";
import AgentAction from "../Agent/AgentAction";
import AdminAction from "../Admin/AdminAction";


const AccountAction = () => {
    const { data: userData } = useGetMeQuery(undefined);
    const activeRole = userData?.data?.role;

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 mt-5 px-2">
                <MyProfileData />
                <div className="w-full bg-linear-to-br from-green-600 to-emerald-700 rounded-3x rounded-3xl py-6 px-4 shadow-xl border  border-green-500/30 text-white relative overflow-hidden">
                    {/* Title */}
                    <h2 className="text-2xl font-bold mb-5 text-yellow-200">
                        Account Action
                    </h2>

                    {/* Buttons Grid */}
                    <div>
                        {activeRole === role.USER && (<UserAction />)}
                        {activeRole === role.AGENT && (<AgentAction />)}
                        {activeRole === role.ADMIN && (<AdminAction/>)}
                    </div>
                </div>
            </div>
            <div>
                <TransactionTable />
            </div>
        </div>
    );
};

export default AccountAction;