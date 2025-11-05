import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button";
import { useGetAllWalletQuery } from "@/redux/features/admin/admin.api";
import type { TWallet } from "@/types";

const AllWallet = () => {
    const { data: walletData } = useGetAllWalletQuery(undefined);
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
                                <TableCell >{wallet?.status}</TableCell>
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