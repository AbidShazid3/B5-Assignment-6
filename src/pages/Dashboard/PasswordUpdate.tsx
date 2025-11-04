import { useAuthPasswordResetMutation } from "@/redux/features/auth/auth.api";
import { handleApiError } from "@/utils/apiErrorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import Password from "@/components/Password";

const updatePasswordSchema = z.object({
    oldPassword: z
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
    newPassword: z
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
});

const PasswordUpdate = () => {
    const [resetPassword] = useAuthPasswordResetMutation();

    const form = useForm<z.infer<typeof updatePasswordSchema>>({
        resolver: zodResolver(updatePasswordSchema),
        defaultValues: {
            oldPassword: '',
            newPassword: '',
        }
    });

    const onSubmit = async (data: z.infer<typeof updatePasswordSchema>) => {
        const toastId = toast.loading("Password updating ......");

        const passwordInfo = {
            oldPassword: data.oldPassword,
            newPassword: data.newPassword,
        };
        try {
            const result = await resetPassword(passwordInfo).unwrap();
            if (result.success) {
                toast.success("Password Updated Successfully.", { id: toastId });
                form.reset();
            }
        } catch (error) {
            handleApiError(error, toastId as string)
        }
    }

    return (
        <Card className="w-full max-w-sm mx-auto">
            <CardHeader>
                <CardTitle className="text-center">Update Your Profile</CardTitle>
                <CardDescription></CardDescription>
                <CardAction></CardAction>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form id='update-pass' onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="oldPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Old Password</FormLabel>
                                    <FormControl>
                                        <Password {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>New Password</FormLabel>
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
            </CardContent>
            <CardFooter className="">
                <Button form="update-pass" variant="default" className="w-full cursor-pointer" type="submit">
                    Update Password
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PasswordUpdate;