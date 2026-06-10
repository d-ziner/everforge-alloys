import { SEOHead } from "@/components/seo/SEOHead";
import { ShieldCheck, Factory, Award, User, Target } from "lucide-react";

export default function About() {
  const team = [
    { name: "Rajesh Kumar", title: "Managing Director", initials: "RK" },
    { name: "Anita Sharma", title: "Head of Export Operations", initials: "AS" },
    { name: "Vikram Patel", title: "Chief Metallurgist", initials: "VP" },
  ];

  return (
    <>
      <SEOHead 
        title="About Us | EverForge Alloys" 
        description="Learn about EverForge Alloys, a premier manufacturer and exporter of non-ferrous metal ingots based in India."
      />
      
      {/* Hero */}
      <section className="bg-muted py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">About EverForge Alloys</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            A trusted name in non-ferrous metal exports, delivering uncompromising quality from India to the world.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 font-serif text-3xl font-bold">Our Story</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              EverForge Alloys is a manufacturer and exporter of high-purity non-ferrous metal ingots based in India. With over a decade of experience in the metals industry, we supply brass ingots, copper ingots, and aluminium ingots to importers across the UAE, United States, China, and Europe. What started as a domestic foundry has grown into a globally recognized export house, built on the principles of precision metallurgy and unwavering reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Facility */}
      <section className="bg-[#F5F2EE] py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            
            <div className="rounded-xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-600 font-serif italic">
                "To be the most trusted name in non-ferrous metal exports from India by consistently exceeding international quality standards and simplifying global procurement."
              </p>
            </div>
            
            <div className="rounded-xl bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Factory className="h-7 w-7" />
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold">Our Facility</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our state-of-the-art manufacturing plant located in Maharashtra boasts a monthly production capacity of over 500 MT. 
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Induction melting furnaces with automated temperature control</li>
                <li>• In-house optical emission spectrometer (OES)</li>
                <li>• Continuous casting lines for uniform ingot structure</li>
                <li>• Dedicated export packaging and container stuffing zones</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted py-20 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h2 className="mb-12 font-serif text-3xl font-bold">Global Credentials & Certifications</h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/5">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-bold">ISO 9001:2015</h4>
              <p className="text-sm text-gray-400">Quality Management</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/5">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-bold">IEC Registered</h4>
              <p className="text-sm text-gray-400">Govt. of India Exporter</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 ring-4 ring-white/5">
                <ShieldCheck className="h-10 w-10 text-primary" />
              </div>
              <h4 className="font-bold">GST Compliant</h4>
              <p className="text-sm text-gray-400">Tax Registration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground">Our Leadership Team</h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member, i) => (
              <div key={i} className="flex flex-col items-center rounded-xl border border-gray-100 bg-gray-50 p-8 text-center shadow-sm">
                <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-white shadow-md">
                  {member.initials}
                </div>
                <h3 className="mb-1 font-serif text-xl font-bold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
