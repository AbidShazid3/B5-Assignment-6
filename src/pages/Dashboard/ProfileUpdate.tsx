import { useGetMeQuery, useUpdateUserMutation } from "@/redux/features/user/user.api";
import { handleApiError } from "@/utils/apiErrorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
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
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const updateProfileSchema = z.object({
    name: z
        .string({ error: "Name must be string" })
        .min(2, { message: "Name must be at least 2 characters long." })
        .max(50, { message: "Name cannot exceed 50 characters." }),
    phone: z
        .string({ error: "Phone number is required" })
        .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
            message: "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
        }),
    email: z
        .union([z.literal(""), z.email({ message: "Invalid email address" })])
        .optional(),
    address: z
        .string({ error: "address must be string." })
        .min(3, { error: "address must be string." })
        .optional(),
})

const ProfileUpdate = () => {
    const { data: userData, refetch } = useGetMeQuery({});
    const [updateUser] = useUpdateUserMutation();

    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            name: '',
            phone: '',
            email: '',
            address: '',
        }
    });

    useEffect(() => {
        if (userData) {
            form.reset({
                name: userData?.data?.name,
                phone: userData?.data?.phone,
                email: userData?.data?.email || "",
                address: userData?.data?.address || "",
            });
        }
    }, [userData, form]);

    const onSubmit = async (data: z.infer<typeof updateProfileSchema>) => {
        const toastId = toast.loading("Profile Updating ......");

        const userInfo = {
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
        };
        try {
            const result = await updateUser(userInfo).unwrap();
            if (result.success) {
                toast.success("Profile Updated Successfully.", { id: toastId });
                refetch();
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
                    <form id='update-profile' onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Name</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Your Email
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Your Email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Phone</FormLabel>
                                    <FormControl>
                                        <Input type="tel" placeholder="Phone Number" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Address</FormLabel>
                                    <FormControl>
                                        <Input type="text" placeholder="Your Address" {...field} />
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
                <Button form="update-profile" variant="default" className="w-full cursor-pointer" type="submit">
                    Update Profile
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProfileUpdate;