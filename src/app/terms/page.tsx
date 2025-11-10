import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <Layout>
      <div className="bg-gray-50/50">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-[#00A7B5]">
                Terms and Conditions
              </CardTitle>
              <p className="text-muted-foreground pt-2">Last updated: November 10, 2025</p>
            </CardHeader>
            <CardContent className="space-y-8 text-muted-foreground">
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">1. Introduction</h2>
                <p>
                  Welcome to Triloki Divine Journey. These Terms and Conditions govern your use of our services and website. By booking a tour with us, you agree to be bound by these terms. Please read them carefully.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">2. Booking and Payment Policy</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span>A booking is confirmed only after we receive the initial deposit. An advance of at least 30% of the total package cost is required to secure your reservation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span>The remaining balance must be paid in full at least 15 days prior to the tour departure date. Failure to do so may result in the cancellation of your booking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span>All prices are quoted in Indian Rupees (INR) unless otherwise specified and are subject to change without prior notice.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">3. Cancellation and Refund Policy</h2>
                 <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span><strong>30+ days before departure:</strong> 80% of the total amount paid will be refunded.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span><strong>15 to 29 days before departure:</strong> 50% of the total amount paid will be refunded.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span><strong>Less than 15 days before departure:</strong> No refund will be provided.</span>
                  </li>
                   <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[#00A7B5] mt-0.5 flex-shrink-0" />
                    <span>Cancellation policies for helicopter services may differ and will be communicated at the time of booking. No refunds are applicable for cancellations due to natural disasters, flight cancellations, or other unforeseen circumstances beyond our control.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">4. Guest Responsibilities</h2>
                <p>
                  All guests are required to carry a valid government-issued photo ID. It is the guest`s responsibility to ensure they are medically fit for the journey, especially for high-altitude tours like the Chardham Yatra. Guests must adhere to the tour guide`s instructions and respect local customs and traditions.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">5. Limitation of Liability</h2>
                <p>
                  Triloki Divine Journey acts only as an agent for hotels, transporters, and other service providers. We are not liable for any injury, loss, damage, delay, or irregularity that may occur due to the conduct of these third-party services. We reserve the right to alter or modify the itinerary due to weather, political conditions, or other circumstances beyond our control.
                </p>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">6. Governing Law</h2>
                <p>
                  Any disputes arising from these terms and conditions or our services will be subject to the exclusive jurisdiction of the courts in Dehradun, Uttarakhand, India.
                </p>
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-800">7. Contact Information</h2>
                <p>
                  For any questions or clarifications regarding these terms, please contact us at <a href="mailto:hospitality.triloki@gmail.com" className="text-[#00A7B5] hover:underline">hospitality.triloki@gmail.com</a>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}