import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import { handleApiError } from "@/utils/apiErrorHandler";

const loginSchema = z.object({
    phone: z
        .string({ error: "Phone number is required" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
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

export default function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            phone: '',
            password: '',
        }
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        const toastId = toast.loading("Logging in...");
        const userInfo = {
            phone: data.phone,
            password: data.password,
        }
        try {
            const result = await login(userInfo);
            if (result.data.success) {
                toast.success('User logged in successfully', { id: toastId });
                navigate('/');
            }
        } catch (error) {
            handleApiError(error, toastId as string)
        }
    }

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Login to your account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to login to your account
                </p>
            </div>
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="01640310327"
                                            type="tel"
                                            autoComplete="tel" {...field} />
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
                                    <FormLabel>Your Pin</FormLabel>
                                    <FormControl>
                                        <Input type="password" autoComplete="current-password" placeholder="*****" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full cursor-pointer">Login</Button>
                    </form>
                </Form>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to={'/register'} className="underline underline-offset-4 hover:text-orange-500">Register</Link>
            </div>
        </div>
    )
}