/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllTransactionQuery } from "@/redux/features/admin/admin.api";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const AllTransaction = () => {
    const { data } = useGetAllTransactionQuery(undefined)
        console.log(data?.data);
    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between space-y-5 md:space-y-0">
                <h1 className="text-2xl lg:text-3xl font-medium">Transaction history</h1>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter By Transaction" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
            <div className="overflow-hidden rounded-md border mt-5">
                <Table>
                    <TableHeader className="bg-amber-700">
                        <TableRow>
                            <TableHead className="w-[100px]">Serial</TableHead>
                            <TableHead>From</TableHead>
                            <TableHead>To</TableHead>
                            <TableHead>Fee</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Direction</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map((tnx: any, idx: number) => (
                            <TableRow key={tnx._id}>
                                <TableCell className="font-medium">{idx +1}</TableCell>
                                <TableHead>
                                    <div className="flex flex-col gap-2 py-2">
                                        <p>{tnx?.from?.user?.name}</p>
                                        <p>{tnx?.from?.user?.phone}</p>
                                    </div>
                                </TableHead>
                                <TableHead>
                                    <div className="flex flex-col gap-2">
                                        <p>{tnx?.to?.user?.name}</p>
                                        <p>{tnx?.to?.user?.phone}</p>
                                    </div>
                                </TableHead>
                                <TableHead>{tnx.fee}</TableHead>
                                <TableHead>{tnx.amount}</TableHead>
                                <TableHead>{tnx?.status}</TableHead>
                                <TableHead>{tnx?.type}</TableHead>
                                <TableCell className="text-right">{tnx?.direction}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="text-muted-foreground flex-1 text-sm">

                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AllTransaction;