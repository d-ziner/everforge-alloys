import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

export default function ProductsIndex() {
  return (
    <>
      <SEOHead 
        title="Our Products | EverForge Alloys" 
        description="Explore our range of high-purity Brass, Copper, and Aluminium ingots manufactured for global export."
      />
      
      {/* Hero */}
      <section className="bg-muted py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">Our Export-Grade Metal Ingots</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Manufactured to exacting international standards. Each batch undergoes rigorous spectro analysis to guarantee chemical composition and physical properties.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="bg-background py-20">
        <div className="container mx-auto flex max-w-5xl flex-col gap-16 px-4 sm:px-8">
          
          {/* Brass */}
          <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#E8C547] to-[#B87333] p-12 flex flex-col justify-center items-center text-white relative">
              <span className="font-mono text-6xl font-bold tracking-tighter opacity-80 mb-4">CuZn</span>
              <h2 className="font-serif text-3xl font-bold relative z-10">Brass Ingots</h2>
            </div>
            <div className="flex flex-col p-8 sm:p-12">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary self-start">58–70% Copper</div>
              <p className="mb-6 text-gray-600 leading-relaxed">
                High-quality brass ingots manufactured from clean brass scrap and virgin metals. Excellent machinability and corrosion resistance. Available in multiple grades suitable for varied industrial applications.
              </p>
              
              <div className="mb-8 space-y-4 text-sm">
                <div><span className="font-semibold">Key Applications:</span> Plumbing fittings, hardware, auto parts</div>
                <div><span className="font-semibold">Available Grades:</span> CuZn40, CuZn37, CuZn30</div>
                <div><span className="font-semibold">Packing:</span> Wooden pallets, 1 MT per pallet</div>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/products/brass-ingots">View Full Specs</Link>
                </Button>
                <Button asChild className="flex-1 bg-primary">
                  <Link href="/quote?product=brass">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Copper */}
          <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#d48141] to-[#8B5523] p-12 flex flex-col justify-center items-center text-white relative md:order-last">
              <span className="font-mono text-6xl font-bold tracking-tighter opacity-80 mb-4">Cu</span>
              <h2 className="font-serif text-3xl font-bold relative z-10">Copper Ingots</h2>
            </div>
            <div className="flex flex-col p-8 sm:p-12">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary self-start">≥ 99.9% Purity</div>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Premium commercial-grade copper ingots delivering exceptional electrical and thermal conductivity. Thoroughly refined to eliminate impurities.
              </p>
              
              <div className="mb-8 space-y-4 text-sm">
                <div><span className="font-semibold">Key Applications:</span> Electrical wiring, transformers, heat exchangers</div>
                <div><span className="font-semibold">Available Grades:</span> HC Copper, ETP Copper</div>
                <div><span className="font-semibold">Packing:</span> Steel strapped on wooden pallets</div>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/products/copper-ingots">View Full Specs</Link>
                </Button>
                <Button asChild className="flex-1 bg-primary">
                  <Link href="/quote?product=copper">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Aluminium */}
          <div className="grid overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af] p-12 flex flex-col justify-center items-center text-[#1C2B3A] relative">
              <span className="font-mono text-6xl font-bold tracking-tighter opacity-40 mb-4">Al</span>
              <h2 className="font-serif text-3xl font-bold relative z-10">Aluminium Ingots</h2>
            </div>
            <div className="flex flex-col p-8 sm:p-12">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary self-start">≥ 99.7% Purity</div>
              <p className="mb-6 text-gray-600 leading-relaxed">
                Lightweight, highly conductive aluminium ingots manufactured to precise alloying specifications. Ideal for melting and casting operations.
              </p>
              
              <div className="mb-8 space-y-4 text-sm">
                <div><span className="font-semibold">Key Applications:</span> Automotive die casting, aerospace components</div>
                <div><span className="font-semibold">Available Grades:</span> ADC12, LM6, A356, 6063</div>
                <div><span className="font-semibold">Packing:</span> 500kg - 1000kg bundles</div>
              </div>
              
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <Button asChild variant="outline" className="flex-1">
                  <Link href="/products/aluminium-ingots">View Full Specs</Link>
                </Button>
                <Button asChild className="flex-1 bg-primary">
                  <Link href="/quote?product=aluminium">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
