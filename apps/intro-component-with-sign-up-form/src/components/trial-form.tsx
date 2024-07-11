"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { cn } from "@ardaeker/utilities";
import { Button } from "./ui/button";

import * as Icon from "@/assets/icons";
import Link from "next/link";

import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "First Name cannot be empty" })
    .max(50, { message: "First Name cannot be more than 50 characters" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Last Name cannot be empty" })
    .max(50, { message: "Last Name cannot be more than 50 characters" }),
  email: z.string().email({ message: "Looks like this is not an email" }),
  password: z
    .string()
    .min(1, { message: "Password cannot be empty" })
    .min(8, { message: "Password must be at least 8 characters" }),
});

export function TrialForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast(values);
    console.log(values);
    form.reset();
  }

  return (
    <div className="relative mt-16 w-full max-w-[20.4375rem] space-y-6 sm:max-w-[33.75rem] xl:mt-0">
      <div className="w-full rounded-[.625rem] bg-[#5E54A4] py-[1.125rem] shadow-[0rem_.5rem_0rem_0rem_rgba(0,0,0,0.15)]">
        <p className="mx-auto max-w-[12.125rem] text-center text-[.9375rem] leading-[1.625rem] tracking-[.0168rem] text-white sm:max-w-none">
          <strong className="font-bold">Try it free 7 days</strong> then&nbsp;
          <span className="block xl:inline">$20/mo. thereafter</span>
        </p>
      </div>
      <div className="rounded-[.625rem] bg-white p-6 shadow-[0rem_.5rem_0rem_0rem_rgba(0,0,0,0.15)] sm:p-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="First Name"
                      {...field}
                      className={cn(
                        form.formState.errors.firstName && "ring-2 ring-[#FF7979] focus:ring-2 focus:ring-[#FF7979]",
                      )}
                    />
                  </FormControl>
                  <FormDescription>Todo Description</FormDescription>
                  {form.formState.errors.firstName && <Icon.Error className="absolute right-[1.6875rem] top-4" />}
                  {form.formState.errors.firstName && (
                    <FormMessage>{form.formState.errors.firstName.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Last Name"
                      {...field}
                      className={cn(
                        form.formState.errors.lastName && "ring-2 ring-[#FF7979] focus:ring-2 focus:ring-[#FF7979]",
                      )}
                    />
                  </FormControl>
                  <FormDescription>Todo Description</FormDescription>
                  {form.formState.errors.lastName && <Icon.Error className="absolute right-[1.6875rem] top-4" />}
                  {form.formState.errors.lastName && (
                    <FormMessage>{form.formState.errors.lastName.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email Address"
                      {...field}
                      className={cn(
                        form.formState.errors.email && "ring-2 ring-[#FF7979] focus:ring-2 focus:ring-[#FF7979]",
                      )}
                    />
                  </FormControl>
                  <FormDescription>Todo Description</FormDescription>
                  {form.formState.errors.email && <Icon.Error className="absolute right-[1.6875rem] top-4" />}
                  {form.formState.errors.email && <FormMessage>{form.formState.errors.email.message}</FormMessage>}
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
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className={cn(
                        form.formState.errors.password && "ring-2 ring-[#FF7979] focus:ring-2 focus:ring-[#FF7979]",
                      )}
                    />
                  </FormControl>
                  <FormDescription>Todo Description</FormDescription>
                  {form.formState.errors.password && <Icon.Error className="absolute right-[1.6875rem] top-4" />}
                  {form.formState.errors.password && (
                    <FormMessage>{form.formState.errors.password.message}</FormMessage>
                  )}
                </FormItem>
              )}
            />
            <Button type="submit" className="uppercase">
              Claim your free trial
            </Button>
          </form>
          <p className="mx-auto mt-2 max-w-[15.5625rem] text-center text-[.6875rem] leading-[1.3125rem] text-[#BAB7D4] sm:max-w-none sm:leading-[1.625rem]">
            By clicking the button, you are agreeing to our&nbsp;
            <Link href="#" className="text-[#FF7979] hover:underline" title="Terms and Services">
              Terms and Services
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}
