import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/T_logo.png"
                alt="Triloki Divine Journey Logo"
                width={40}
                height={40}
                className="rounded-full bg-[#00A7B5]"
              />
              <span className="font-cinzel font-semibold text-xl text-white">Triloki Divine Journey</span>
            </Link>
            <p className="text-sm text-gray-400">
              Your trusted partner in spiritual travel, offering curated journeys to India’s most sacred destinations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/#packages" className="text-sm text-gray-400 hover:text-white">Packages</Link></li>
              <li><Link href="/#about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link href="/#contact" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: hospitality.triloki@gmail.com</li>
              <li>Phone: +91 8445214371 /  97203 40187</li>
              <li>Address: Dehradun, Uttarakhand, India</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook /></Link>
              <Link href="https://www.instagram.com/trilokigroup/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Instagram /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Twitter /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Triloki Divine Journey. All Rights Reserved.</p>
          <p className="mt-2">
            Made and managed by{" "}
            <a
              href="https://cryptiqnetworks.software"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white underline"
            >
              Cryptiq Networks
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

