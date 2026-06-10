import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

export default function BrassIngots() {
  return (
    <>
      <SEOHead 
        title="Brass Ingots Export | EverForge Alloys" 
        description="High-purity brass ingots (CuZn40, CuZn37, CuZn30) for industrial applications. Exported globally with guaranteed chemical composition."
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
                Brass Ingots — High-Purity for Industrial & Commercial Applications
              </h1>
              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                EverForge Alloys produces premium brass ingots formulated for exceptional machinability, corrosion resistance, and structural integrity. Our brass ingots are cast under strict temperature controls to prevent zinc evaporation and ensure uniform composition across every batch.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/quote?product=brass">Request a Quote for Brass</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative h-64 rounded-xl lg:h-96 overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#E8C547] to-[#B87333]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-mono text-8xl font-bold text-white/30">CuZn</span>
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
                      <td className="px-6 py-4 text-gray-600">Copper Content</td>
                      <td className="px-6 py-4 font-mono text-gray-900">58–70%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Zinc Content</td>
                      <td className="px-6 py-4 font-mono text-gray-900">Balance</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Lead Content</td>
                      <td className="px-6 py-4 font-mono text-gray-900">≤ 0.5%</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Density</td>
                      <td className="px-6 py-4 font-mono text-gray-900">8.4–8.7 g/cm³</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Melting Point</td>
                      <td className="px-6 py-4 font-mono text-gray-900">900–940°C</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Available Grades</td>
                      <td className="px-6 py-4 font-mono text-gray-900">CuZn40, CuZn37, CuZn30</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Ingot Weight</td>
                      <td className="px-6 py-4 font-mono text-gray-900">5 kg, 10 kg, 25 kg</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-600">Packing</td>
                      <td className="px-6 py-4 text-gray-900">Wooden pallets, 1 MT per pallet</td>
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
                  <li>Plumbing fittings and valves</li>
                  <li>Electrical components and connectors</li>
                  <li>Architectural hardware and hinges</li>
                  <li>Decorative items and instruments</li>
                  <li>Automotive parts and gears</li>
                  <li>Marine hardware</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
