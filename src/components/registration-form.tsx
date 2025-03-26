"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Toaster } from "@/components/ui/toaster"
import { BackgroundGradient } from "@/components/ui/background-gradient"

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
  specialRequirements: z.string().optional(),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
})

export function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      numberOfPeople: "",
      preferredDate: "",
      specialRequirements: "",
      termsAccepted: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Here you would integrate with Appwrite to store the form data
      // For now, we'll just simulate a successful submission
      console.log(values)

      // Uncomment this when Appwrite is set up
      // await createRegistration(values)

      toast({
        title: "Registration Submitted",
        description:
          "Thank you for registering for the Chardham Helicopter Tour. Our team will contact you shortly to confirm your booking details.",
      })

      form.reset()
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your registration. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="numberOfPeople"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of People</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-[#00A7B5] focus:ring-[#FF8200]">
                        <SelectValue placeholder="Select number of people" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3">3 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="5">5 People</SelectItem>
                      <SelectItem value="6">6 People</SelectItem>
                    </SelectContent>
                  </Select>
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
                    <Input type="date" {...field} className="border-[#00A7B5] focus-visible:ring-[#FF8200]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="specialRequirements"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Special Requirements</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any special requirements or requests"
                    {...field}
                    className="border-[#00A7B5] focus-visible:ring-[#FF8200]"
                  />
                </FormControl>
                <FormDescription>
                  Please mention any dietary restrictions, medical conditions, or other special requirements.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
                  <FormLabel>I accept the terms and conditions</FormLabel>
                  <FormDescription>
                    By checking this box, you agree to our{" "}
                    <a href="#" className="text-[#00A7B5] underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#00A7B5] underline">
                      Privacy Policy
                    </a>
                    .
                  </FormDescription>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-[#FF8200] hover:bg-[#FF9F1C] text-white" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </Button>
        </form>
      </Form>
    </BackgroundGradient>
  )
}

