import { Link } from "wouter";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/seo/SEOHead";

export default function ThankYou() {
  return (
    <>
      <SEOHead title="Thank You | EverForge Alloys" />
      
      <section className="flex min-h-[70vh] items-center justify-center bg-[#F5F2EE] px-4 py-20">
        <div className="w-full max-w-md rounded-2xl bg-white p-10 text-center shadow-lg">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          
          <h1 className="mb-4 font-serif text-3xl font-bold text-foreground">
            Your Quote Request Has Been Received!
          </h1>
          
          <p className="mb-8 text-gray-600 leading-relaxed">
            Thank you for reaching out to EverForge Alloys. Our export team will review your requirements and respond with a detailed proforma invoice within <strong>24 business hours</strong>.
          </p>
          
          <div className="mb-8 rounded-lg bg-gray-50 p-4 border border-gray-100 text-sm">
            <p className="text-gray-700 mb-2">Need immediate assistance?</p>
            <a 
              href="https://wa.me/919999999999" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded bg-[#25D366] px-4 py-2 font-medium text-white transition-opacity hover:opacity-90 w-full"
            >
              <SiWhatsapp className="h-5 w-5" /> Message us on WhatsApp
            </a>
          </div>
          
          <div className="flex flex-col gap-3">
            <Button asChild variant="outline">
              <Link href="/">Return to Home</Link>
            </Button>
            <Link href="/products" className="text-sm font-medium text-primary hover:underline inline-flex items-center justify-center gap-1">
              Browse our Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
