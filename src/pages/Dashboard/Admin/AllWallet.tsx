/* eslint-disable @typescript-eslint/no-explicit-any */
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
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { useGetAllWalletQuery, useUpdateWalletStatusMutation } from "@/redux/features/admin/admin.api";
import type { TWallet, TWalletStatus } from "@/types";
import { toast } from "sonner";
import { handleApiError } from "@/utils/apiErrorHandler";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

const AllWallet = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
    const [limit, setLimit] = useState<number>(Number(searchParams.get('limit')) || 10);
    const [sort, setSort] = useState<string>(searchParams.get('sort') || "-createdAt");
    const [status, setStatus] = useState("ALL");

    const query: Record<string, any> = { page: currentPage, limit, sort };
    if (status && status !== "ALL") query.status = status;

    const { data: walletData, isLoading, isError } = useGetAllWalletQuery(query);
    const [updateWallet] = useUpdateWalletStatusMutation();
    const totalPage = walletData?.meta?.totalPage || 1;

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

    useEffect(() => {
        setSearchParams({ page: currentPage.toString(), limit: limit.toString(), sort, status })
    }, [currentPage, limit, sort, setSearchParams, status])

    return (
        <div>
            <div className="flex flex-col gap-4 w-full">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <h1 className="text-2xl lg:text-3xl font-medium text-center md:text-left">
                        Total Wallet: {walletData?.meta?.total}
                    </h1>
                </div>

                {/* Controls Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center">

                    {/* filter by status */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold whitespace-nowrap">Filter:</span>
                        <Select
                            value={status}
                            onValueChange={(value) => {
                                setStatus(value);
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ALL">All</SelectItem>
                                <SelectItem value="ACTIVE">Active</SelectItem>
                                <SelectItem value="BLOCKED">Blocked</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>


                    {/* Sort */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold whitespace-nowrap">Sort by:</span>
                        <Select
                            value={sort}
                            onValueChange={(value) => {
                                setSort(value);
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select sort" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="-createdAt">Newest</SelectItem>
                                <SelectItem value="createdAt">Oldest</SelectItem>
                                <SelectItem value="name">Name (A-Z)</SelectItem>
                                <SelectItem value="-name">Name (Z-A)</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Limit */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold whitespace-nowrap">Limit:</span>
                        <Select
                            value={limit.toString()}
                            onValueChange={(val) => {
                                setLimit(Number(val));
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select limit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="20">20</SelectItem>
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Clear All */}
                    <div>
                        <Button
                            variant="outline"
                            className="w-full text-red-500 hover:text-red-600 cursor-pointer"
                            onClick={() => {
                                setSort("-createdAt");
                                setLimit(10);
                                setStatus("ALL");
                                setCurrentPage(1);
                            }}
                        >
                            Clear All
                        </Button>
                    </div>
                </div>
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
                    {!isLoading && isError && (
                        <div>
                            <p>Something Went Wrong!!</p>{" "}
                        </div>
                    )}

                    {!isLoading && !walletData?.data && (
                        <div>
                            <p>No Data Found</p>{" "}
                        </div>
                    )}
                    {/* 🟡 Loading State */}
                    {isLoading && (
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={7} className="text-center py-10">
                                    <div className="flex items-center justify-center">
                                        <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    )}
                    {!isLoading && !isError && walletData?.data?.length > 0 && (
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
                    )}
                </Table>
            </div>
            {totalPage > 1 && (
                <div className="pt-6">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                            {Array.from({ length: totalPage }, ((_, index) => index + 1)).map(page => (<PaginationItem key={page}>
                                <PaginationLink
                                    onClick={() => setCurrentPage(page)}
                                    isActive={currentPage === page}
                                    className="cursor-pointer"
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>))
                            }
                            <PaginationItem>
                                <PaginationNext
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className={currentPage === totalPage ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            )}
        </div>
    );
};

export default AllWallet;