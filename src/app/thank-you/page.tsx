import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="max-w-xl text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#00A7B5]">Message sent successfully</h1>
        <p className="text-muted-foreground">Thank you for contacting Triloki Divine Journey. We’ll get back to you shortly.</p>
        <Link href="/" className="inline-block px-6 py-3 rounded-md bg-[#FF8200] hover:bg-[#FF9F1C] text-white">
          Go to Home
        </Link>
      </div>
    </div>
  )
}