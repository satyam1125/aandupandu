"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"
import { Toaster } from "../components/ui/sonner"
import { cn } from "@/lib/utils"
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
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { createBooking } from "@/app/actions/booking-actions"

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

  async function onSubmit(data: BookingFormValues) {
    setIsSubmitting(true)
    try {
      await createBooking(data)
      Toaster({
        title: "Booking Submitted",
        description: "We've received your booking request and will contact you shortly.",
      })
      form.reset()
      onOpenChange(false)
    } catch (error) {
      console.error("Booking error:", error)
      Toaster({
        title: "Submission Error",
        description: "There was a problem submitting your booking. Please try again.",
        variant: "destructive",
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
            Fill out the form below to book your spiritual journey with Triloki Hospitality.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <FormField
                control={form.control}
                name="travelDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Travel Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
            <FormField
              control={form.control}
              name="specialRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Requirements</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Any special requirements or questions?" className="resize-none" {...field} />
                  </FormControl>
                  <FormDescription>
                    Let us know if you have any dietary restrictions, accessibility needs, or other special
                    requirements.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="flex flex-col sm:flex-row gap-2">
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="w-full sm:w-auto">
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

