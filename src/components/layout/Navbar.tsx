import { Link } from "wouter";
import { SiWhatsapp } from "react-icons/si";
import { Menu, X, ChevronDown, Anvil } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full flex-col font-sans">
      {/* Top Banner */}
      <div className="flex h-8 items-center justify-center bg-primary px-4 text-xs font-medium tracking-wide text-white sm:text-sm">
        <span>ISO 9001:2015 Certified Exporter | Serving UAE · USA · China · Europe</span>
      </div>

      {/* Main Nav */}
      <nav className="flex h-20 items-center justify-between bg-muted px-4 text-white shadow-md sm:px-8">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90" data-testid="link-logo">
          <Anvil className="h-8 w-8 text-primary" />
          <span className="font-serif text-2xl font-bold tracking-tight">EverForge Alloys</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
          
          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <Link href="/products" className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2">
              Products <ChevronDown className="h-4 w-4" />
            </Link>
            
            {productsDropdownOpen && (
              <div className="absolute top-full left-0 mt-0 w-56 rounded-md bg-white py-2 text-foreground shadow-lg ring-1 ring-black ring-opacity-5">
                <Link href="/products/brass-ingots" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">Brass Ingots</Link>
                <Link href="/products/copper-ingots" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">Copper Ingots</Link>
                <Link href="/products/aluminium-ingots" className="block px-4 py-2 text-sm hover:bg-gray-100 hover:text-primary">Aluminium Ingots</Link>
              </div>
            )}
          </div>
          
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">About</Link>
          <Link href="/quality" className="text-sm font-medium transition-colors hover:text-primary">Quality</Link>
          <Link href="/export-markets" className="text-sm font-medium transition-colors hover:text-primary">Export Markets</Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-[#25D366] transition-opacity hover:opacity-80">
            <SiWhatsapp className="h-5 w-5" />
            <span>WhatsApp Us</span>
          </a>
          <Link href="/quote" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
            Request Quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(true)}
          data-testid="btn-mobile-menu"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div 
            className="w-[80%] max-w-sm bg-muted p-6 text-white shadow-2xl" 
            onClick={e => e.stopPropagation()}
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-xl font-bold">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 text-lg font-medium">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <div className="flex flex-col gap-4 border-l-2 border-primary pl-4">
                <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">All Products</Link>
                <Link href="/products/brass-ingots" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-400">Brass Ingots</Link>
                <Link href="/products/copper-ingots" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-400">Copper Ingots</Link>
                <Link href="/products/aluminium-ingots" onClick={() => setMobileMenuOpen(false)} className="text-sm text-gray-400">Aluminium Ingots</Link>
              </div>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/quality" onClick={() => setMobileMenuOpen(false)}>Quality</Link>
              <Link href="/export-markets" onClick={() => setMobileMenuOpen(false)}>Export Markets</Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              
              <div className="mt-4 flex flex-col gap-4 border-t border-gray-700 pt-6">
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#25D366]">
                  <SiWhatsapp className="h-6 w-6" /> WhatsApp Us
                </a>
                <Link href="/quote" onClick={() => setMobileMenuOpen(false)} className="flex h-12 items-center justify-center rounded bg-primary text-white">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
