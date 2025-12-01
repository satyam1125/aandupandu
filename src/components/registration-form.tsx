"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

// ⭐ UPDATED SCHEMA — added package field
const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  numberOfPeople: z.string().min(1, {
    message: "Please select the number of people.",
  }),
  preferredDate: z.string().min(1, {
    message: "Please select your preferred date.",
  }),

  // ⭐ NEW FIELD
  package: z.string().min(2, {
    message: "Please enter package name.",
  }),

  specialRequirements: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
});

export function RegistrationForm() {
  const [redirectURL, setRedirectURL] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined")
      setRedirectURL(`${window.location.origin}/thank-you`);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      numberOfPeople: "",
      preferredDate: "",
      package: "", // ⭐ NEW DEFAULT
      specialRequirements: "",
      termsAccepted: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // ⭐ Package is automatically included here
        body: JSON.stringify({
          ...values,
          numberOfPeople: parseInt(values.numberOfPeople),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit registration");
      }

      toast.success("Registration Submitted", {
        description:
          "Thank you for registering for the tour. Our team will contact you shortly.",
      });

      form.reset();
    } catch (error) {
      toast.error("Registration Failed", {
        description:
          error instanceof Error
            ? error.message
            : "There was a problem submitting your registration. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-xl p-[2px] bg-gradient-to-r from-[#00A7B5] via-[#5CC6CE] to-[#FF8200] w-full">
      <Card className="w-full shadow-sm rounded-[12px] bg-white dark:bg-slate-900">
        <CardHeader>
          <CardTitle className="text-2xl">Registration / Enquiry</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="d8e15609-af66-4bd6-a266-e64ef6a0d449"
              />
              <input
                type="hidden"
                name="redirect"
                value={redirectURL || "https://web3forms.com/success"}
              />
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        {...field}
                        className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Grid: Email + Phone */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          {...field}
                          className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                        />
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
                        <Input
                          placeholder="Enter your phone number"
                          {...field}
                          className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* ⭐ NEW PACKAGE FIELD */}
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Example: Do Dham Helicopter Tour"
                        {...field}
                        className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the tour package name you want to book.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Address */}
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter your address"
                        {...field}
                        className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Grid: People + Date */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="numberOfPeople"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Number of People</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={100}
                          {...field}
                          className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Special Requirements */}
              <FormField
                control={form.control}
                name="specialRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enquiry Question & Special Requirement</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any special requirements or requests"
                        {...field}
                        className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                      />
                    </FormControl>
                    <FormDescription>
                      Mention dietary restrictions, medical conditions, etc.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Terms */}
              <FormField
                control={form.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-[#FF8200] data-[state=checked]:border-[#FF8200]"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the terms and conditions
                      </FormLabel>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-[#FF8200] hover:bg-[#FF9F1C] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Registration & Enquiry"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
