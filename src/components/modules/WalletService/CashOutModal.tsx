import Password from "@/components/Password";
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
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { useCashOutMutation } from "@/redux/features/wallet/wallet.api";
import { handleApiError } from "@/utils/apiErrorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

const cashOutSchema = z.object({
    agentPhone: z
        .string({ error: "Phone number is required" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
    amount: z
        .string({ error: "Amount is required" }),
    password: z
        .string({ error: "Password is required" })
        .min(5, "Password must be at least 5 digits")
        .max(20, "Password must be exactly 20 digits")
        .regex(/^(?=.*[A-Z])/, {
            message: "Password must contain at least 1 uppercase letter.",
        })
        .regex(/^(?=.*[!@#$%^&*])/, {
            message: "Password must contain at least 1 special character.",
        })
        .regex(/^(?=.*\d)/, {
            message: "Password must contain at least 1 number.",
        }),
})

const CashOutModal = () => {
    const [open, setOpen] = useState(false);
    const [cashOut] = useCashOutMutation();

    const form = useForm<z.infer<typeof cashOutSchema>>({
        resolver: zodResolver(cashOutSchema),
        defaultValues: {
            agentPhone: "",
            amount: "",
            password: ""
        },
    })

    const onSubmit = async (data: z.infer<typeof cashOutSchema>) => {
        const toastId = toast.loading('Cash Outing...')
        const cahOutData = {
            ...data,
            amount: Number(data.amount)
        }
        try {
            const res = await cashOut(cahOutData).unwrap();
            if (res.success) {
                toast.success("Cash Out successfully", { id: toastId });
                setOpen(false);
                form.reset();
            }
        } catch (error) {
            handleApiError(error, toastId as string);
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger asChild>
                <button className="flex flex-col items-center justify-center bg-yellow-200 text-gray-900 rounded-2xl p-4 hover:bg-yellow-300 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg group w-full cursor-pointer">
                    <ArrowUpCircle
                        size={50}
                        className="text-gray-900 mb-3 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                    <span className="font-semibold text-base">Cash Out</span>
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Cash Out</DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form id='cash-out' onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="agentPhone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Agent Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Agent phone" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="amount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Amount (min 50)</FormLabel>
                                    <FormControl>
                                        <Input type="number" placeholder="Positive Amount" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </form>
                </Form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <Button form="cash-out" type="submit" className="cursor-pointer">Submit</Button>
                </DialogFooter>
            </DialogContent>

        </Dialog>
    );
};

export default CashOutModal;