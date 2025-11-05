import { useGetAllAgentQuery } from "@/redux/features/admin/admin.api";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type { IUser } from "@/types";
import { Button } from "@/components/ui/button";

const AllAgent = () => {
    const { data: agentData } = useGetAllAgentQuery(undefined);
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-5 md:space-y-0">
                <h1 className="text-2xl lg:text-3xl font-medium">Total Agents : {agentData?.data?.length}</h1>

            </div>
            <div className="overflow-hidden rounded-md border mt-5">
                <Table>
                    <TableHeader className="bg-amber-700">
                        <TableRow>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {agentData?.data?.map((user: IUser, idx: number) => (
                            <TableRow key={user._id}>
                                <TableCell className="font-medium">{idx + 1}</TableCell>
                                <TableHead>{user?.name}</TableHead>
                                <TableHead>{user?.phone}</TableHead>
                                <TableHead>{user?.email || "Null"}</TableHead>
                                <TableHead>{user?.role}</TableHead>
                                <TableCell >{user?.status}</TableCell>
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

export default AllAgent;