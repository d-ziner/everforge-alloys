import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Globe2, ShieldCheck, TrendingUp, Ship, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

export default function Home() {
  return (
    <>
      <SEOHead 
        title="EverForge Alloys | Brass, Copper & Aluminium Ingot Exporters from India" 
        description="Precision-crafted Brass, Copper, and Aluminium Ingots manufactured to international standards. Trusted by importers across UAE, USA, China, and Europe."
      />
      
      {/* 1. Hero Section */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-muted px-4 py-20 text-center sm:px-8">
        {/* Real forge photo background */}
        <div className="absolute inset-0 z-0" 
          style={{ 
            backgroundImage: `url("/hero-forge.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundRepeat: "no-repeat"
          }} 
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 z-0 bg-gradient-to-tr from-black/85 via-[#0d1f2d]/75 to-black/70" />
        
        <div className="relative z-10 mx-auto max-w-4xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl font-bold leading-tight sm:text-6xl lg:text-[64px]">
              Precision-Crafted Metal Ingots.<br />
              <span className="text-primary">Exported from India to the World.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-gray-300 sm:text-xl"
          >
            Brass · Copper · Aluminium Ingots manufactured to international standards. Trusted by importers across UAE, USA, China, and Europe.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
          >
            <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 px-8">
              <Link href="/quote" data-testid="hero-btn-quote">Request a Quote →</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-foreground hover:bg-white hover:text-muted text-lg h-14 px-8 bg-transparent">
              <Link href="/products" data-testid="hero-btn-products">View Our Products</Link>
            </Button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-400 sm:gap-8 sm:text-base"
          >
            <div className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Made in India</div>
            <div className="hidden h-4 w-px bg-gray-700 sm:block"></div>
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-primary" /> ISO 9001:2015 Certified</div>
            <div className="hidden h-4 w-px bg-gray-700 sm:block"></div>
            <div className="flex items-center gap-2"><Globe2 className="h-5 w-5 text-primary" /> Exporting to 15+ Countries</div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="bg-gradient-to-r from-primary via-secondary to-primary py-12 text-white">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center sm:px-8 md:grid-cols-4">
          <div>
            <div className="font-serif text-4xl font-bold sm:text-5xl">500+ MT</div>
            <div className="mt-2 text-sm font-medium tracking-wide text-white/80 uppercase">Monthly Capacity</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-bold sm:text-5xl">15+</div>
            <div className="mt-2 text-sm font-medium tracking-wide text-white/80 uppercase">Export Reach</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-bold sm:text-5xl">10+ Yrs</div>
            <div className="mt-2 text-sm font-medium tracking-wide text-white/80 uppercase">Experience</div>
          </div>
          <div>
            <div className="font-serif text-4xl font-bold sm:text-5xl">99.9%</div>
            <div className="mt-2 text-sm font-medium tracking-wide text-white/80 uppercase">Quality Standard</div>
          </div>
        </div>
      </section>

      {/* 3. Products Overview */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Our Export-Grade Products</h2>
            <p className="mt-4 text-lg text-gray-600">High-purity non-ferrous metal ingots tailored for international markets.</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Brass */}
            <motion.div whileHover={{ y: -5 }} className="group flex flex-col rounded-lg border-l-4 border-primary bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#E8C547] to-[#B87333] shadow-inner flex items-center justify-center">
                <span className="text-xl font-bold text-white font-mono">Br</span>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold">Brass Ingots</h3>
              <p className="mb-6 flex-1 text-gray-600">High-quality brass ingots suitable for precision machining, plumbing fittings, and decorative applications.</p>
              <div className="mb-6 space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Purity</span>
                  <span className="font-mono font-medium">58–70% Cu</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">MOQ</span>
                  <span className="font-mono font-medium">5 MT</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/products/brass-ingots" className="text-center font-medium text-primary hover:underline">View Details →</Link>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/quote?product=brass">Request Quote</Link>
                </Button>
              </div>
            </motion.div>

            {/* Copper */}
            <motion.div whileHover={{ y: -5 }} className="group flex flex-col rounded-lg border-l-4 border-primary bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#B87333] to-[#8B5523] shadow-inner flex items-center justify-center">
                <span className="text-xl font-bold text-white font-mono">Cu</span>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold">Copper Ingots</h3>
              <p className="mb-6 flex-1 text-gray-600">Premium HC and ETP copper ingots delivering exceptional electrical and thermal conductivity.</p>
              <div className="mb-6 space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Purity</span>
                  <span className="font-mono font-medium">≥ 99.9%</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">MOQ</span>
                  <span className="font-mono font-medium">5 MT</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/products/copper-ingots" className="text-center font-medium text-primary hover:underline">View Details →</Link>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/quote?product=copper">Request Quote</Link>
                </Button>
              </div>
            </motion.div>

            {/* Aluminium */}
            <motion.div whileHover={{ y: -5 }} className="group flex flex-col rounded-lg border-l-4 border-primary bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/10">
              <div className="mb-6 h-16 w-16 rounded-full bg-gradient-to-br from-[#d1d5db] to-[#9ca3af] shadow-inner flex items-center justify-center">
                <span className="text-xl font-bold text-white font-mono">Al</span>
              </div>
              <h3 className="mb-3 font-serif text-2xl font-bold">Aluminium Ingots</h3>
              <p className="mb-6 flex-1 text-gray-600">Pure and alloyed aluminium ingots optimized for automotive die casting and structural profiles.</p>
              <div className="mb-6 space-y-2 text-sm">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Purity</span>
                  <span className="font-mono font-medium">≥ 99.7%</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-500">MOQ</span>
                  <span className="font-mono font-medium">5 MT</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/products/aluminium-ingots" className="text-center font-medium text-primary hover:underline">View Details →</Link>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link href="/quote?product=aluminium">Request Quote</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="bg-[#F5F2EE] py-24">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Why Global Importers Choose EverForge Alloys</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: "Consistent Purity", desc: "Every batch meets international chemical composition standards" },
              { icon: TrendingUp, title: "Flexible MOQ", desc: "Minimum order quantities designed for importers of all sizes" },
              { icon: Ship, title: "On-Time Shipment", desc: "Reliable production schedules with documented dispatch timelines" },
              { icon: CheckCircle2, title: "Export Documentation", desc: "Full set: COO, COA, Packing List, Bill of Lading, LC accepted" },
              { icon: Settings, title: "Custom Sizing", desc: "Ingots available in custom weights and dimensions per buyer spec" },
              { icon: Factory, title: "Competitive Pricing", desc: "Direct manufacturer pricing, no middlemen" }
            ].map((feature, i) => (
              <div key={i} className="flex gap-4 rounded-lg bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-2 font-serif text-lg font-bold">{feature.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works */}
      <section className="bg-muted py-24 text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold sm:text-4xl">How to Order from EverForge Alloys</h2>
          </div>
          
          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-[23px] top-8 hidden h-0.5 w-[calc(100%-46px)] bg-gray-700 md:block"></div>
            
            <div className="grid gap-12 md:grid-cols-4 md:gap-4">
              {[
                { step: 1, title: "Submit Quote Request", icon: "📋" },
                { step: 2, title: "We Send Proforma Invoice", icon: "📄" },
                { step: 3, title: "Confirm Order & Payment", icon: "💳" },
                { step: 4, title: "We Ship & Send Docs to Your Port", icon: "🚢" }
              ].map((s) => (
                <div key={s.step} className="relative z-10 flex flex-col items-center text-center">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white shadow-lg shadow-primary/20 ring-8 ring-muted">
                    {s.step}
                  </div>
                  <h4 className="font-serif text-lg font-semibold">{s.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Mini Quote Form */}
      <section className="bg-gradient-to-r from-secondary to-primary py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-2xl sm:p-12">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-foreground">Get a Quote in 24 Hours</h2>
            
            <form action="https://formspree.io/f/mnjyzzrp" method="POST" className="grid gap-6 md:grid-cols-2">
              <input type="hidden" name="_subject" value="New Quote Request — EverForge Alloys" />
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" required className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                <input type="text" name="company" required className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Acme Imports LLC" />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" name="email" required className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" placeholder="john@example.com" />
              </div>
              
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Product Interest</label>
                <select name="product" required className="w-full rounded-md border border-gray-300 px-4 py-3 bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                  <option value="">Select Product...</option>
                  <option value="Brass">Brass Ingots</option>
                  <option value="Copper">Copper Ingots</option>
                  <option value="Aluminium">Aluminium Ingots</option>
                  <option value="Multiple">Multiple Products</option>
                </select>
              </div>

              <div className="md:col-span-2 mt-4 text-center">
                <Button type="submit" size="lg" className="h-14 w-full bg-primary px-8 text-lg hover:bg-primary/90 sm:w-auto">
                  Send My Quote Request →
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
