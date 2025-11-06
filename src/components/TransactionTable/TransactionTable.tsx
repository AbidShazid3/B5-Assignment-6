/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Select,
    SelectContent,
    SelectItem,
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
} from "@/components/ui/table";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button"
import { useGetMyTransactionQuery } from "@/redux/features/transaction.api";
import type { ITransaction } from "@/types";
import { useSearchParams } from "react-router";
import { useEffect, useState } from "react";

const TransactionTable = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) || 1);
    const [limit, setLimit] = useState<number>(Number(searchParams.get('limit')) || 10);
    const [sort, setSort] = useState<string>(searchParams.get('sort') || "-createdAt");
    const [type, setType] = useState("ALL");
    const [direction, setDirection] = useState("ALL");

    const query: Record<string, any> = { page: currentPage, limit, sort };
    if (type && type !== "ALL") query.type = type;
    if (direction && direction !== "ALL") query.direction = direction;

    const { data: myTransaction, isLoading, isError } = useGetMyTransactionQuery(query);
    const totalPage = myTransaction?.meta?.totalPage || 1;

    useEffect(() => {
        setSearchParams({ page: currentPage.toString(), limit: limit.toString(), sort, type, direction })
    }, [currentPage, limit, sort, setSearchParams, type, direction])

    return (
        <div className="w-full mt-10">
            <div className="flex flex-col gap-4 w-full">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <h1 className="text-2xl lg:text-3xl font-medium text-center md:text-left">
                        Total Wallet: {myTransaction?.meta?.total}
                    </h1>
                </div>

                {/* Controls Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 items-center">

                    {/* filter by type */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold whitespace-nowrap">Filter:</span>
                        <Select
                            value={type}
                            onValueChange={(value) => {
                                setType(value);
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ALL">By Type</SelectItem>
                                <SelectItem value="SEND">Send</SelectItem>
                                <SelectItem value="WITHDRAW">Withdraw</SelectItem>
                                <SelectItem value="TOP_UP">Top_Up</SelectItem>
                                <SelectItem value="CASH_IN">Cash In</SelectItem>
                                <SelectItem value="CASH_OUT">Cash Out</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* filter by direction */}
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold whitespace-nowrap">Filter:</span>
                        <Select
                            value={direction}
                            onValueChange={(value) => {
                                setDirection(value);
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select direction" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ALL">By Direction</SelectItem>
                                <SelectItem value="SENT">Sent</SelectItem>
                                <SelectItem value="RECEIVED">Received</SelectItem>
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
                                <SelectItem value="amount">Price(Low-High)</SelectItem>
                                <SelectItem value="-amount">Price(High-Low)</SelectItem>
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
                                setType("ALL");
                                setDirection("ALL");
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
                            <TableHead>From</TableHead>
                            <TableHead>To</TableHead>
                            <TableHead>Fee</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Direction</TableHead>
                        </TableRow>
                    </TableHeader>

                    {!isLoading && isError && (
                        <div>
                            <p>Something Went Wrong!!</p>{" "}
                        </div>
                    )}

                    {!isLoading && !myTransaction?.data && (
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

                    {!isLoading && !isError && myTransaction?.data?.length > 0 && (
                        <TableBody>
                            {myTransaction?.data?.map((tnx: ITransaction, idx: number) => (
                                <TableRow key={tnx._id}>
                                    <TableCell className="font-medium">{idx + 1}</TableCell>
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

export default TransactionTable;