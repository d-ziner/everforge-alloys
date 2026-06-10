import { SEOHead } from "@/components/seo/SEOHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle2, FlaskConical, TestTube, Scale, Eye } from "lucide-react";

export default function Quality() {
  const documents = [
    { title: "Certificate of Analysis (COA)", desc: "Detailed chemical composition breakdown from our spectro lab." },
    { title: "Certificate of Origin (COO)", desc: "Official chamber of commerce document for import customs." },
    { title: "Mill Test Report (MTR)", desc: "Physical property test results." },
    { title: "Packing List", desc: "Granular breakdown of pallet weights, heat numbers, and dimensions." },
    { title: "Commercial Invoice", desc: "Detailed billing documentation matching letter of credit terms." },
  ];

  return (
    <>
      <SEOHead 
        title="Quality & Testing | EverForge Alloys" 
        description="Learn about our rigorous metallurgical testing processes and export documentation standards."
      />
      
      {/* Hero */}
      <section className="bg-muted py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">Uncompromising Quality Control</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Every batch produced at EverForge Alloys undergoes rigorous spectroscopic analysis and physical testing before dispatch.
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold">Our 4-Step Testing Process</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md">1</div>
              <div className="mb-4 text-primary"><FlaskConical className="h-10 w-10" /></div>
              <h3 className="mb-3 font-serif text-xl font-bold">Spectro Analysis</h3>
              <p className="text-sm text-gray-600">Optical Emission Spectrometry (OES) verifies exact chemical composition to parts-per-million accuracy before casting.</p>
            </div>
            
            <div className="relative flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md">2</div>
              <div className="mb-4 text-primary"><TestTube className="h-10 w-10" /></div>
              <h3 className="mb-3 font-serif text-xl font-bold">Hardness Testing</h3>
              <p className="text-sm text-gray-600">Brinell and Rockwell hardness tests ensure the ingots meet the mechanical requirements of the specified grade.</p>
            </div>
            
            <div className="relative flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md">3</div>
              <div className="mb-4 text-primary"><Scale className="h-10 w-10" /></div>
              <h3 className="mb-3 font-serif text-xl font-bold">Dimensional Inspection</h3>
              <p className="text-sm text-gray-600">Laser-guided measurement verifies weight tolerances and physical dimensions for consistent container loading.</p>
            </div>
            
            <div className="relative flex flex-col rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
              <div className="absolute -top-5 -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white shadow-md">4</div>
              <div className="mb-4 text-primary"><Eye className="h-10 w-10" /></div>
              <h3 className="mb-3 font-serif text-xl font-bold">Visual Inspection</h3>
              <p className="text-sm text-gray-600">Final manual check for surface defects, dross inclusions, and proper heat number stamping before packaging.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="bg-[#F5F2EE] py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">Export Documentation Included</h2>
              <p className="mb-8 text-lg text-gray-600">
                We understand that smooth customs clearance is critical for importers. Every shipment from EverForge Alloys is accompanied by a flawless, verifiable set of export documents.
              </p>
              
              <ul className="space-y-6">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h4 className="font-bold text-gray-900">{doc.title}</h4>
                      <p className="text-sm text-gray-600">{doc.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-10">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/contact">Request a Sample COA</Link>
                </Button>
              </div>
            </div>
            
            <div className="rounded-2xl border-8 border-white bg-gray-100 p-8 shadow-xl">
              <div className="space-y-4 font-mono text-xs text-gray-500 opacity-60">
                <div className="border-b border-gray-300 pb-4">
                  <h4 className="text-lg font-bold text-gray-800">CERTIFICATE OF ANALYSIS</h4>
                  <p>Heat No: EA-2025-0842</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>Element</div><div>Result (%)</div>
                  <div>Cu</div><div>61.54</div>
                  <div>Zn</div><div>38.12</div>
                  <div>Pb</div><div>0.21</div>
                  <div>Fe</div><div>0.08</div>
                  <div>Sn</div><div>0.03</div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-4">
                  <p>Authorized Signatory</p>
                  <div className="h-8 w-32 border-b border-gray-400"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
