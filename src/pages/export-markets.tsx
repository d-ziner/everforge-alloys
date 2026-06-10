import { SEOHead } from "@/components/seo/SEOHead";
import { Ship, CreditCard, Clock, Globe } from "lucide-react";

export default function ExportMarkets() {
  return (
    <>
      <SEOHead 
        title="Export Markets & Logistics | EverForge Alloys" 
        description="Serving metal importers worldwide. View our shipping terms, lead times, and global export destinations including UAE, USA, and Europe."
      />
      
      {/* Hero */}
      <section className="bg-muted py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">Serving Importers Worldwide</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            A reliable supply chain linking Indian manufacturing excellence to global industrial hubs.
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto mb-16 max-w-4xl text-center">
            {/* Abstract SVG Map representation */}
            <svg viewBox="0 0 1000 500" className="w-full h-auto opacity-80" aria-hidden="true">
              <path d="M150,150 Q200,100 250,150 T350,150" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
              <path d="M450,200 Q500,150 550,200 T650,200" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
              <path d="M700,250 Q750,200 800,250 T900,250" fill="none" stroke="#e5e7eb" strokeWidth="4"/>
              
              {/* Nodes representing markets */}
              <circle cx="200" cy="180" r="8" fill="#B87333" className="animate-pulse" /> {/* USA */}
              <circle cx="480" cy="220" r="8" fill="#B87333" className="animate-pulse" /> {/* UK/Germany */}
              <circle cx="620" cy="280" r="10" fill="#E8C547" /> {/* UAE */}
              <circle cx="700" cy="290" r="12" fill="#1C2B3A" /> {/* India (Origin) */}
              <circle cx="820" cy="250" r="8" fill="#B87333" className="animate-pulse" /> {/* China */}
              <circle cx="800" cy="320" r="8" fill="#B87333" className="animate-pulse" /> {/* Singapore */}
              <circle cx="880" cy="400" r="8" fill="#B87333" className="animate-pulse" /> {/* Australia */}

              {/* Connections */}
              <path d="M700,290 L620,280" fill="none" stroke="#B87333" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M700,290 L480,220" fill="none" stroke="#B87333" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M700,290 L200,180" fill="none" stroke="#B87333" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M700,290 L820,250" fill="none" stroke="#B87333" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M700,290 L800,320" fill="none" stroke="#B87333" strokeWidth="2" strokeDasharray="5,5" />
              <path d="M700,290 L880,400" fill="none" stroke="#B87333" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇦🇪 UAE</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇺🇸 USA</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇨🇳 China</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇩🇪 Germany</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇬🇧 UK</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇸🇬 Singapore</span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800">🇦🇺 Australia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics & Terms */}
      <section className="bg-[#F5F2EE] py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Ship className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold">Shipping & Logistics</h3>
              <ul className="space-y-4 text-gray-600">
                <li><strong className="text-gray-900">Incoterms:</strong> FOB, CIF, CFR accepted</li>
                <li><strong className="text-gray-900">Major Origin Ports:</strong> JNPT Mumbai, Mundra Port, Chennai Port</li>
                <li><strong className="text-gray-900">Packaging:</strong> Export-grade ISPM-15 compliant wooden pallets, steel strapped and shrink-wrapped</li>
                <li><strong className="text-gray-900">Container:</strong> 20ft Heavy Duty (approx 20-25 MT capacity)</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold">Payment Terms</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span>LC at Sight (Irrevocable)</span> <span className="font-bold text-green-600">✓</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span>30% TT Advance + 70% against BL copy</span> <span className="font-bold text-green-600">✓</span>
                </li>
                <li className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span>DP (Documents against Payment)</span> <span className="font-bold text-green-600">✓</span>
                </li>
                <li className="pt-2 text-sm italic text-gray-500">Subject to credit approval and order volume.</li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-serif text-2xl font-bold">Lead Times</h3>
              <p className="mb-4 text-gray-600">
                We maintain streamlined production schedules to ensure rapid dispatch from order confirmation.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between rounded bg-gray-50 px-4 py-2">
                  <span className="text-gray-600">Standard Orders (1-2 FCL)</span>
                  <span className="font-semibold">15-21 Days</span>
                </div>
                <div className="flex justify-between rounded bg-gray-50 px-4 py-2">
                  <span className="text-gray-600">Bulk Orders (3+ FCL)</span>
                  <span className="font-semibold">25-30 Days</span>
                </div>
                <div className="flex justify-between rounded bg-gray-50 px-4 py-2">
                  <span className="text-gray-600">Custom Compositions</span>
                  <span className="font-semibold">Add 7 Days</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
