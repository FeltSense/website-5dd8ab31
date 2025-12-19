import Link from 'next/link'
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-3">
                Sarah Chen Photography
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Award-winning architectural photographer capturing the essence of design through striking black and white imagery. 
                Crafting visual stories that celebrate the intersection of light, shadow, and structure.
              </p>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary-500 transition-colors duration-300 group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
              <Link 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-500 transition-colors duration-300 group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-400">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                  Architectural Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                  Commercial Spaces
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                  Fine Art Prints
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary-500 transition-colors duration-300 text-sm">
                  Private Commissions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-secondary-400">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 text-sm">
                  About Sarah
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 text-sm">
                  Awards & Recognition
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 text-sm">
                  Press & Media
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-secondary-500 transition-colors duration-300 text-sm">
                  Exhibitions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@sarahchenphotography.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sarah Chen Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}