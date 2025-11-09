import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { role } from "@/constants/role";
import { useRegisterMutation } from "@/redux/features/user/user.api";
import { toast } from "sonner";
import { handleApiError } from "@/utils/apiErrorHandler";
import Password from "@/components/Password";


const registerSchema = z.object({
    name: z
        .string({ error: "Name must be string" })
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
    email: z
        .union([z.literal(""), z.email({ message: "Invalid email address" })])
        .optional(),
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
    role: z.enum([role.USER, role.AGENT, role.ADMIN], {
        message: "Role must be either user, agent, or admin",
    }),
});

export default function RegisterForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [register] = useRegisterMutation();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            role: undefined,
        },
    });

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        const toastId = toast.loading("Registering...");
        const newUser = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: data.password,
            role: data.role,
        };
        try {
            const result = await register(newUser).unwrap();
            console.log(result);
            if (result.success) {
                toast.success('User created successfully', { id: toastId });
                navigate('/login');
            }
        } catch (error) {
            handleApiError(error, toastId as string)
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            {/* Header */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Fill the form below to register your account
                </p>
            </div>

            {/* Form */}
            <div className="grid gap-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        {/* Name */}
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Email (Optional) */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email (Optional)</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="example@mail.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Phone */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+8801640310327" autoComplete="tel-national" type="tel" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pin</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Role Select */}
                        <FormField
                            control={form.control}
                            name="role"
                            render={({ field }) => (
                                <FormItem className="w-full">
                                    <FormLabel>Account Type</FormLabel>
                                    <Select onValueChange={field.onChange}
                                        value={field.value}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a role" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Role</SelectLabel>
                                                <SelectItem value="USER">User</SelectItem>
                                                <SelectItem value="AGENT">Agent</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full cursor-pointer">
                            Register
                        </Button>
                    </form>
                </Form>
            </div>

            <div className="text-center text-sm">
                Already have an account?{" "}
                <Link
                    to={"/login"}
                    className="underline underline-offset-4 hover:text-orange-500"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}
