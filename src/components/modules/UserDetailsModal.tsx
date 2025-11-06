import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useGetSingleUserQuery } from "@/redux/features/user/user.api";

const UserDetailsModal = ({ userId }: { userId: string }) => {
    const { data: userData } = useGetSingleUserQuery({ id: userId })
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"outline"} className="cursor-pointer border-amber-600 text-amber-700 hover:bg-amber-50 transition-all" size={"sm"}>
                    Details
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[420px] rounded-lg shadow-md">
                <DialogHeader>
                    <DialogTitle className="text-lg font-semibold">
                        Account Details
                    </DialogTitle>
                </DialogHeader>
                <DialogDescription asChild>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div><strong>User ID :</strong> {userData?.data?._id}</div>
                        <div><strong>Name :</strong> {userData?.data?.name}</div>
                        <div><strong>Wallet ID :</strong> {userData?.data?.wallet?._id}</div>
                        <div className="flex items-center">
                            <strong>Wallet Status :</strong>
                            <span
                                className={`px-2 py-1 rounded text-xs font-semibold 
                                    ${userData?.data?.wallet?.status === "ACTIVE"
                                        ? " text-green-700"
                                        : " text-red-700"
                                    }`}
                            >
                                {userData?.data?.wallet?.status || "N/A"}
                            </span>
                        </div>

                        <div>
                            <strong>Balance :</strong> {userData?.data?.wallet?.balance?.toFixed(2)} ৳
                        </div>
                        <div><strong>Email :</strong> {userData?.data?.email}</div>
                        <div><strong>Phone :</strong> {userData?.data?.phone}</div>
                        <div><strong>Account Type :</strong> {userData?.data?.role}</div>
                        <div className="flex items-center">
                            <strong>Status :</strong>
                            <span
                                className={`px-2 py-1 rounded text-xs font-semibold 
                                    ${userData?.data?.status === "ACTIVE"
                                        ? "text-green-700"
                                        : userData?.data?.status === "PENDING"
                                            ? " text-yellow-700"
                                            : " text-red-700"
                                    }`}
                            >
                                {userData?.data?.status || "N/A"}
                            </span>
                        </div>

                    </div>
                </DialogDescription>

                <DialogFooter className="mt-4">
                    <DialogClose asChild>
                        <Button variant="destructive" className="w-full cursor-pointer">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UserDetailsModal;