import { z } from "zod"

export const bookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  package: z.string().min(1, "Please select a package"),
  travelDate: z.date(),
  numberOfPeople: z.number().int().positive(),
  specialRequirements: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>