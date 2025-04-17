"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { Toaster } from "sonner"

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
      const response = await fetch('/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          numberOfPeople: parseInt(values.numberOfPeople)
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to submit registration')
      }

      toast.success("Registration Submitted", {
        description: "Thank you for registering for the Chardham Helicopter Tour. Our team will contact you shortly to confirm your booking details.",
      })

      form.reset()
    } catch (error) {
      toast.error("Registration Failed", {
        description: error instanceof Error ? error.message : "There was a problem submitting your registration. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
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
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={100} // Adjust the maximum limit as needed
                      placeholder="Enter number of people"
                      {...field}
                      className="border-[#00A7B5] focus-visible:ring-[#FF8200] appearance-none" // Removed arrow with `appearance-none`
                      required // Makes the field compulsory
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
<Button 
              type="submit" 
              className="w-full bg-[#FF8200] hover:bg-[#FF9F1C] text-white" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
          </form>
        </Form>
      </BackgroundGradient>
      
      <Toaster 
        position="top-center"
        toastOptions={{
          classNames: {
            toast: 'group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border',
            description: 'group-[.toast]:text-muted-foreground',
            actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
            cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
          },
        }}
      />
    </>
  )
}