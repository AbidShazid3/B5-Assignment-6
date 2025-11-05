import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useGetAllWalletQuery, useUpdateWalletStatusMutation } from "@/redux/features/admin/admin.api";
import type { TWallet, TWalletStatus } from "@/types";
import { toast } from "sonner";
import { handleApiError } from "@/utils/apiErrorHandler";

const AllWallet = () => {
    const { data: walletData } = useGetAllWalletQuery(undefined);
    const [updateWallet] = useUpdateWalletStatusMutation();

    const handleChange = async (newStatus: TWalletStatus, id: string) => {
        const toastId = toast.loading("Status updating ......");
        const walletStatus = {
            status: newStatus
        }

        try {
            const result = await updateWallet({ id, status: walletStatus }).unwrap();

            if (result.success) {
                toast.success("Status Updated Successfully.", { id: toastId });
            }
        } catch (error) {
            handleApiError(error, toastId as string);
        }
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-5 md:space-y-0">
                <h1 className="text-2xl lg:text-3xl font-medium">Total Agents : {walletData?.data?.length}</h1>

            </div>
            <div className="overflow-hidden rounded-md border mt-5">
                <Table>
                    <TableHeader className="bg-amber-700">
                        <TableRow>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Balance</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {walletData?.data?.map((wallet: TWallet, idx: number) => (
                            <TableRow key={wallet._id}>
                                <TableCell className="font-medium">{idx + 1}</TableCell>
                                <TableHead>{wallet?.user?.name}</TableHead>
                                <TableHead>{wallet?.user?.phone}</TableHead>
                                <TableHead>{wallet?.user?.role}</TableHead>
                                <TableCell >
                                    <Select
                                        defaultValue={wallet?.status}
                                        onValueChange={(value) => handleChange(value as TWalletStatus, wallet?._id)}
                                    >
                                        <SelectTrigger
                                            className={`w-[130px] border-2 
                                                ${wallet?.status === "ACTIVE" ? "border-green-500" : "border-red-500"}`}
                                        >
                                            <SelectValue placeholder="Select status" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="ACTIVE">✅ Active</SelectItem>
                                            <SelectItem value="BLOCKED">🚫 Blocked</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                                <TableCell >{wallet?.balance}</TableCell>
                                <TableCell className="text-right">
                                    <Button className="cursor-pointer" size={"sm"}>Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default AllWallet;