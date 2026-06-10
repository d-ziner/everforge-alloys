import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-gray-300">
      <div className="container mx-auto px-4 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-6">
            <div>
              <img src="/logo.svg" alt="EverForge Alloys" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed">
              Precision-crafted non-ferrous metal ingots. Manufactured to international standards and exported from India to the world.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-white" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/" className="transition-colors hover:text-primary">Home</Link></li>
              <li><Link href="/about" className="transition-colors hover:text-primary">About Us</Link></li>
              <li><Link href="/quality" className="transition-colors hover:text-primary">Quality Philosophy</Link></li>
              <li><Link href="/export-markets" className="transition-colors hover:text-primary">Export Markets</Link></li>
              <li><Link href="/quote" className="transition-colors hover:text-primary">Request a Quote</Link></li>
              <li><Link href="/contact" className="transition-colors hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold text-white">Products</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link href="/products/brass-ingots" className="transition-colors hover:text-primary">Brass Ingots</Link></li>
              <li><Link href="/products/copper-ingots" className="transition-colors hover:text-primary">Copper Ingots</Link></li>
              <li><Link href="/products/aluminium-ingots" className="transition-colors hover:text-primary">Aluminium Ingots</Link></li>
              <li className="pt-2"><Link href="/products" className="text-primary hover:underline">View All Products →</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 font-serif text-lg font-semibold text-white">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>Gali No. B5, Gopal Puri<br />Aligarh, Uttar Pradesh 202001, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href="mailto:exports@everforgealloys.com" className="transition-colors hover:text-white">exports@everforgealloys.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+91 6397597020</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-[#15212d] py-6 text-xs text-gray-400">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center sm:px-8 md:flex-row md:text-left">
          <p>© 2025 EverForge Alloys. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <span>ISO 9001:2015</span>
            <span>IEC: XXXXXXXX</span>
            <span>GST: XXXXXXXXXXXX</span>
            <span className="font-semibold text-white">Made in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
