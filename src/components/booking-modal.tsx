'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {  Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createBooking } from "@/app/actions/booking-actions"
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  package: z.string({
    required_error: "Please select a package.",
  }),
  travelDate: z.date({
    required_error: "Please select a travel date.",
  }),
  numberOfPeople: z.string().min(1, {
    message: "Please enter the number of people.",
  }),
  specialRequirements: z.string().optional(),
})

type BookingFormValues = z.infer<typeof formSchema>

// Package options
const packages = [
  { id: "chardham", name: "Chardham Helicopter Tour" },
  { id: "dodham", name: "Do Dham Helicopter Tour" },
  { id: "kedarnath", name: "Kedarnath Helicopter Tour" },
  { id: "road-chardham", name: "Road-based Chardham Yatra" },
]

interface BookingModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  defaultPackage?: string
}

export function BookingModal({ open, onOpenChange, defaultPackage }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize form with react-hook-form and Zod
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: defaultPackage || "",
      specialRequirements: "",
      numberOfPeople: "1",
    },
  })

  // Form submission handler
  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true)
    try {
      const submissionData = {
        ...data,
        date: data.travelDate.toISOString(), // Map travelDate to date
        travelDate: undefined, // Remove travelDate if necessary
      }
  
      console.log('Submitting booking:', submissionData)
      
      await createBooking(submissionData)
      
      toast.success("Booking Submitted")
      form.reset()
      onOpenChange(false)
    } catch (error) {
      console.error("Booking error details:", error)
      toast.error("Submission Failed", {
        description: error instanceof Error ? error.message : "Please check your input and try again"
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center text-[#00A7B5]">Book Your Tour</DialogTitle>
          <DialogDescription className="text-center">
            Fill out the form below to book your spiritual journey with us.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name Field */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Phone Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Package Selection */}
              <FormField
                control={form.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a package" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {packages.map((pkg) => (
                          <SelectItem key={pkg.id} value={pkg.id}>
                            {pkg.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Travel Date Picker */}
              <FormField
  control={form.control}
  name="travelDate"
  render={({ field }) => (
    <FormItem className="flex flex-col">
      <FormLabel>Travel Date</FormLabel>
      <FormControl>
        <ReactDatePicker
          selected={field.value}
          onChange={(date) => field.onChange(date)} // Update the form field value
          minDate={new Date()} // Disable past dates
          placeholderText="Pick a date"
          dateFormat="PPP" // Format the displayed date
          className="w-full border border-gray-300 rounded-md p-2"
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

              {/* Number of People Select */}
              <FormField
                control={form.control}
                name="numberOfPeople"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of People</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select number of people" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                        <SelectItem value="more">More than 10</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Special Requirements Textarea */}
            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Any special requirements or questions?" 
                      className="resize-none" 
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Let us know if you have any dietary restrictions, accessibility needs, 
                    or other special requirements.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Form Actions */}
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => onOpenChange(false)} 
                className="w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#FF8200] hover:bg-[#FF9F1C] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Booking"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}