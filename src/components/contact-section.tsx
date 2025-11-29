"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import "react-datepicker/dist/react-datepicker.css";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Enter a valid email." }),
  phone: z.string().min(10, { message: "Enter a valid phone number." }),
  package: z.string({ required_error: "Select a package." }),
  travelDate: z.date({ required_error: "Pick a travel date." }),
  numberOfPeople: z.string().min(1, { message: "Select number of people." }),
  specialRequirements: z.string().optional(),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      package: "",
      numberOfPeople: "1",
      specialRequirements: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // You can wire this to your booking action or email service
    // For now, just log and reset
    console.log("Contact/Registration submit:", data);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#00A7B5]/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid gap-10 px-4 md:px-10 md:gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00A7B5]">
              Contact Us
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have questions or want to register? Fill the form — we’ll reach you
              shortly.
            </p>
            <div className="grid gap-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-[#FF8200]" />
                <a
                  href="https://www.google.com/maps/place/OYO+Hotel+Satyam+Swagat/@29.9228372,78.1124992,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#FF8200]"
                >
                  Hotel Satyam Swagat, Uchapul Aryanagar, Jwalapur, Haridwar
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#FF8200]" />
                <span>+91-9720340187 / 8445214371</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#FF8200]" />
                <span>hospitality.triloki@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[#FF8200]" />
                <span>Monday to Saturday: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
            <div className="mt-8">
              <Image
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/1c/82/8a/new-satyam-swagat.jpg?w=2100&h=1300&s=1"
                alt="Triloki Hospitality Office"
                width={500}
                height={300}
                className="rounded-lg object-cover shadow-lg"
              />
            </div>
          </motion.div>

          {/* Right column: Registration-style Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            {/* Gradient border wrapper to match RegistrationForm styling */}
            <div className="rounded-xl p-[2px] bg-gradient-to-r from-[#00A7B5] via-[#5CC6CE] to-[#FF8200]">
              <Card className="w-full shadow-sm rounded-[12px] bg-white dark:bg-slate-900">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact / Registration</CardTitle>
                </CardHeader>
                <CardContent>
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
                                  <SelectItem value="kashmir">Kashmir Tour</SelectItem>
                                  <SelectItem value="chardham">Chardham Helicopter Tour</SelectItem>
                                  <SelectItem value="dodham">Do Dham Helicopter Tour</SelectItem>
                                  <SelectItem value="amarnath">Amarnath Helicopter Tour</SelectItem>
                                  <SelectItem value="road-chardham">Road-based Chardham Yatra</SelectItem>
                                  <SelectItem value="leh-ladakh">Leh Ladakh Tour</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

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
                                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                                  <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                                ))}
                                <SelectItem value="more">More than 10</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="specialRequirements"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Special Requirements</FormLabel>
                            <FormControl>
                              <Textarea placeholder="Any special requirements or questions?" className="resize-none" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                          type="submit"
                          className="w-full sm:w-auto bg-[#FF8200] hover:bg-[#FF9F1C] text-white"
                        >
                          Submit
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => form.reset()}
                          className="w-full sm:w-auto border-[#00A7B5] text-[#00A7B5] hover:bg-[#00A7B5] hover:text-white"
                        >
                          Reset
                        </Button>
                      </div>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

