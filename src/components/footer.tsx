import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto flex flex-col gap-4 py-10 px-4 md:px-6 md:flex-row md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/T_logo.png"
              alt="Triloki Hospitality Logo"
              width={60}
              height={60}
              className="rounded-full bg-[#00A7B5] object-cover"
            />
            <span className="font-bold text-[#00A7B5] text-3xl">Triloki Group Tours and Travels</span>
          </div>
          <h1 className="text-sm text-muted-foreground max-w-lg leading-relaxed text-center">
          Triloki Groups is a trusted travel agency with over 10 years of experience in organizing spiritual journeys. We specialize in the sacred Char Dham Yatra, offering well-planned, safe, and spiritually enriching pilgrimages. Our commitment to service, comfort, and devotion has made us a preferred choice for thousands of devotees across India.
  </h1>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-[#00A7B5]">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-[#00A7B5]">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-6 bg-[#00A7B5]/5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:px-6 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Triloki Hospitality. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#FF8200]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

