import { SEOHead } from "@/components/seo/SEOHead";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <>
      <SEOHead 
        title="Contact Us | EverForge Alloys" 
        description="Get in touch with EverForge Alloys for export inquiries, quality reports, or general questions."
      />
      
      {/* Hero */}
      <section className="bg-muted py-16 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
            Our export team is available to assist you with specifications, pricing, and logistics.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto max-w-6xl grid gap-16 lg:grid-cols-5">
            
            {/* Form */}
            <div className="lg:col-span-3 rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 font-serif text-2xl font-bold">Send an Inquiry</h2>
              <form action="https://formspree.io/f/mnjyzzrp" method="POST" className="space-y-6">
                <input type="hidden" name="_subject" value="New General Contact — EverForge Alloys" />
                
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" name="name" required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Company Name</label>
                    <input type="text" name="company" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email Address *</label>
                    <input type="email" name="email" required className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" name="phone" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Country</label>
                  <input type="text" name="country" className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">Message *</label>
                  <textarea name="message" required rows={5} className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl bg-gray-50 p-8 border border-gray-100">
                <h3 className="mb-6 font-serif text-xl font-bold">Contact Details</h3>
                
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <MapPin className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <strong className="block text-gray-900">Head Office & Plant</strong>
                      <span className="text-sm text-gray-600">Gali No. B5, Gopal Puri<br />Aligarh, Uttar Pradesh 202001<br />India</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <strong className="block text-gray-900">Email Us</strong>
                      <div className="mt-1 text-sm text-gray-600">
                        <span className="block"><strong className="text-gray-800">Export Inquiries:</strong> exports@everforgealloys.com</span>
                        <span className="block mt-1"><strong className="text-gray-800">Quality/COA:</strong> quality@everforgealloys.com</span>
                      </div>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <strong className="block text-gray-900">Call Us</strong>
                      <span className="text-sm text-gray-600">+91 63975 97020</span>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <SiWhatsapp className="h-6 w-6 shrink-0 text-[#25D366]" />
                    <div>
                      <strong className="block text-gray-900">WhatsApp</strong>
                      <a href="https://wa.me/916397597020" className="text-sm text-gray-600 hover:text-[#25D366]">+91 63975 97020</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock className="h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <strong className="block text-gray-900">Business Hours</strong>
                      <span className="text-sm text-gray-600">Mon–Sat, 9:00 AM – 6:00 PM IST</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
