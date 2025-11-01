/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { motion } from "motion/react"

const contactFormSchema = z.object({
  name: z.string().min(3, { error: "Enter your name min 3 character length" }),
  email: z.email({ message: "Must be a valid email" }),
  phone: z
    .string()
    .length(11, { message: "Phone number must be exactly 11 digits" })
    .regex(/^01\d{9}$/, {
      message:
        "Invalid Bangladeshi phone number. Must start with '01' and be exactly 11 digits.",
    }),
  subject: z.string().min(10, { message: "Write your subject min 10 characters" }),
  message: z.string().min(10, { message: "Write your message min 10 characters" }),
});

const ContactPage = () => {

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", phone: "", subject: "", message: "" },
  });

  const contactData = {
    title: "Contact Us",
    description:
      "We're here to help! Reach out to our team with any questions or feedback.",
    phone: "+8801640310327",
    email: "abidshazid3@gmail.com",
    label: "dpay.com",
    url: "https://dpay.com",
  };

  const onSubmit = async (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 px-2 lg:px-8"
    >
      <div className="container mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-1/2 flex flex-col">
          <h1 className="text-3xl font-semibold lg:text-5xl text-center mb-3">{contactData.title}</h1>
          <p className="text-muted-foreground lg:text-xl text-center">{contactData.description}</p>

          <div className="rounded-lg border p-6 shadow-sm hover:shadow-md transition mt-10">
            <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold">Phone: </span>
                {contactData.phone}
              </li>
              <li>
                <span className="font-bold">Email: </span>
                <a href={`mailto:${contactData.email}`} className="underline">
                  {contactData.email}
                </a>
              </li>
              <li>
                <span className="font-bold">Web: </span>
                <a href={contactData.url} target="_blank" className="underline">
                  {contactData.label}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:w-1/2 rounded-lg border p-8 shadow-sm hover:shadow-md transition bg-white dark:bg-accent">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {["name", "email", "phone", "subject"].map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as any}
                  render={({ field: f }) => (
                    <FormItem>
                      <FormLabel className="capitalize">{`Your ${field}`}</FormLabel>
                      <FormControl>
                        <Input placeholder={`Enter your ${field}`} {...f} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Write your message here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full cursor-pointer" variant={"destructive"}>
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;