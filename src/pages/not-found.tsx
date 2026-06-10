import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";

export default function NotFound() {
  return (
    <>
      <SEOHead title="404 Page Not Found | EverForge Alloys" />
      <div className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-background px-4">
        <div className="mx-auto max-w-md text-center">
          <div className="mb-6 flex justify-center text-primary">
            <AlertCircle className="h-20 w-20" />
          </div>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">404</h1>
          <h2 className="mt-2 text-xl font-semibold text-gray-700">Page not found</h2>
          <p className="mt-4 text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
