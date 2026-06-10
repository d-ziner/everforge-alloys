import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

export default function AluminiumIngots() {
  return (
    <>
      <SEOHead 
        title="Aluminium Ingots Export | EverForge Alloys" 
        description="High-purity aluminium ingots (≥ 99.7% Al) for die casting and structural profiles. Exported globally with guaranteed composition."
      />
      
      {/* Hero */}
      <section className="bg-muted pt-12 pb-20 text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <Link href="/products" className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
          </Link>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h1 className="font-serif text-4xl font-bold sm:text-5xl leading-tight">
                Aluminium Ingots — Lightweight & High Strength
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                EverForge Alloys provides commercial-grade and alloyed aluminium ingots engineered for optimal flowability and structural integrity. Ideal for automotive die casting, aerospace components, and advanced manufacturing.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/quote?product=aluminium">Request a Quote for Aluminium</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl lg:h-96 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#e5e7eb] to-[#9ca3af]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-8xl font-bold text-[#1C2B3A]/30">Al</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Content */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-3">
            
            <div className="lg:col-span-2">
              <h2 className="mb-6 font-serif text-3xl font-bold">Technical Specifications</h2>
              <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                <table className="w-full text-left text-sm">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 font-semibold text-gray-900 w-1/3">Parameter</th>
                      <th className="px-6 py-4 font-semibold text-gray-900">Value</th>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Aluminium Content</td>
                      <td className="px-6 py-4 font-mono text-gray-900">≥ 99.7%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Density</td>
                      <td className="px-6 py-4 font-mono text-gray-900">2.70 g/cm³</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Melting Point</td>
                      <td className="px-6 py-4 font-mono text-gray-900">660°C</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Available Grades</td>
                      <td className="px-6 py-4 font-mono text-gray-900">ADC12, LM6, A356, 6063</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Ingot Weight</td>
                      <td className="px-6 py-4 font-mono text-gray-900">5 kg, 10 kg, 25 kg</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Packing</td>
                      <td className="px-6 py-4 text-gray-900">500kg - 1000kg bundles, steel strapped</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">MOQ</td>
                      <td className="px-6 py-4 text-gray-900">5 MT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div>
              <div className="rounded-lg bg-gray-50 p-8 border border-gray-100">
                <h3 className="mb-4 font-serif text-2xl font-bold">Applications</h3>
                <ul className="space-y-3 text-gray-600 list-disc pl-5">
                  <li>Automotive die casting (engine blocks, wheels)</li>
                  <li>Construction and architectural profiles</li>
                  <li>Aerospace and aviation components</li>
                  <li>Packaging and foils</li>
                  <li>Electrical transmission lines</li>
                  <li>Consumer electronics housings</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
