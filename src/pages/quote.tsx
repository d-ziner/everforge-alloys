import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const quoteSchema = z.object({
  // Step 1
  name: z.string().min(2, "Name is required"),
  jobTitle: z.string().optional(),
  company: z.string().min(2, "Company is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().optional(),
  website: z.string().optional(),
  
  // Step 2
  productsRequired: z.array(z.string()).min(1, "Select at least one product"),
  gradeSpec: z.string().optional(),
  quantity: z.string().min(1, "Quantity is required"),
  quantityUnit: z.string().min(1, "Unit required"),
  frequency: z.string().optional(),
  deliveryPort: z.string().min(2, "Delivery port is required"),
  targetDate: z.string().optional(),
  additionalReqs: z.string().optional(),
  requestSample: z.boolean().default(false),
  
  // Step 3
  email: z.string().email("Valid email required"),
  phone: z.string().min(5, "Phone is required"),
  prefContact: z.string().optional(),
  bestTime: z.string().optional(),
  source: z.string().min(1, "Please tell us how you found us"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export default function Quote() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "", jobTitle: "", company: "", country: "UAE", city: "", website: "",
      productsRequired: [], gradeSpec: "", quantity: "", quantityUnit: "MT", frequency: "One-time", deliveryPort: "", targetDate: "", additionalReqs: "", requestSample: false,
      email: "", phone: "", prefContact: "Email", bestTime: "", source: ""
    },
    mode: "onChange",
  });

  const nextStep = async () => {
    let fieldsToValidate: any[] = [];
    if (step === 1) fieldsToValidate = ["name", "company", "country"];
    if (step === 2) fieldsToValidate = ["productsRequired", "quantity", "quantityUnit", "deliveryPort"];
    
    const isValid = await form.trigger(fieldsToValidate as any);
    if (isValid) setStep(s => Math.min(s + 1, 3));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          formData.append(key, value.join(", "));
        } else {
          formData.append(key, String(value));
        }
      });
      formData.append("_subject", "New Quote Request — EverForge Alloys");

      await fetch("https://formspree.io/f/mnjyzzrp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      setLocation("/thank-you");
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Request a Quote | EverForge Alloys" 
        description="Request pricing and availability for export-grade Brass, Copper, and Aluminium ingots."
      />
      
      <section className="bg-muted py-12 text-white">
        <div className="container mx-auto px-4 text-center sm:px-8">
          <h1 className="font-serif text-3xl font-bold sm:text-4xl">Request a Quote</h1>
          <p className="mt-4 text-gray-300">Complete the form below to receive pricing within 24 business hours.</p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white shadow-lg">
            
            {/* Progress Bar */}
            <div className="flex border-b border-gray-100 p-6">
              {[1, 2, 3].map((num) => (
                <div key={num} className="flex flex-1 items-center">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full font-bold ${
                    step >= num ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
                  }`}>
                    {step > num ? <CheckCircle2 className="h-5 w-5" /> : num}
                  </div>
                  {num < 3 && (
                    <div className={`mx-2 h-1 flex-1 rounded ${
                      step > num ? "bg-primary" : "bg-gray-100"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <div className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* STEP 1 */}
                  {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <h2 className="font-serif text-2xl font-bold">Step 1: Your Details</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem><FormLabel>Full Name *</FormLabel><FormControl><Input placeholder="John Doe" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="jobTitle" render={({ field }) => (
                          <FormItem><FormLabel>Job Title</FormLabel><FormControl><Input placeholder="Procurement Manager" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="company" render={({ field }) => (
                          <FormItem><FormLabel>Company Name *</FormLabel><FormControl><Input placeholder="Acme Imports LLC" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="country" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Country *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Select country" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="UAE">United Arab Emirates</SelectItem>
                                <SelectItem value="USA">United States</SelectItem>
                                <SelectItem value="China">China</SelectItem>
                                <SelectItem value="Germany">Germany</SelectItem>
                                <SelectItem value="UK">United Kingdom</SelectItem>
                                <SelectItem value="Singapore">Singapore</SelectItem>
                                <SelectItem value="Australia">Australia</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="city" render={({ field }) => (
                          <FormItem><FormLabel>City</FormLabel><FormControl><Input placeholder="Dubai" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="website" render={({ field }) => (
                          <FormItem><FormLabel>Website (optional)</FormLabel><FormControl><Input placeholder="https://" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                    </div>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <h2 className="font-serif text-2xl font-bold">Step 2: Product & Order Details</h2>
                      
                      <FormField control={form.control} name="productsRequired" render={() => (
                        <FormItem>
                          <div className="mb-4"><FormLabel className="text-base">Products Required *</FormLabel></div>
                          <div className="flex flex-wrap gap-4">
                            {['Brass', 'Copper', 'Aluminium'].map((item) => (
                              <FormField key={item} control={form.control} name="productsRequired" render={({ field }) => {
                                return (
                                  <FormItem key={item} className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm bg-gray-50">
                                    <FormControl>
                                      <Checkbox checked={field.value?.includes(item)} onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...field.value, item])
                                          : field.onChange(field.value?.filter((value) => value !== item))
                                      }} />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item} Ingots</FormLabel>
                                  </FormItem>
                                )
                              }} />
                            ))}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField control={form.control} name="gradeSpec" render={({ field }) => (
                          <FormItem><FormLabel>Specific Grade (if known)</FormLabel><FormControl><Input placeholder="e.g. CuZn37, ADC12" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        
                        <div className="flex gap-4">
                          <FormField control={form.control} name="quantity" render={({ field }) => (
                            <FormItem className="flex-1"><FormLabel>Est. Quantity *</FormLabel><FormControl><Input type="number" placeholder="5" {...field} /></FormControl><FormMessage /></FormItem>
                          )} />
                          <FormField control={form.control} name="quantityUnit" render={({ field }) => (
                            <FormItem className="w-24">
                              <FormLabel>Unit</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                                <SelectContent>
                                  <SelectItem value="MT">MT</SelectItem>
                                  <SelectItem value="KG">KG</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormItem>
                          )} />
                        </div>
                        
                        <FormField control={form.control} name="frequency" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Order Frequency</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="One-time">One-time</SelectItem>
                                <SelectItem value="Monthly">Monthly</SelectItem>
                                <SelectItem value="Quarterly">Quarterly</SelectItem>
                                <SelectItem value="Annual Contract">Annual Contract</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="deliveryPort" render={({ field }) => (
                          <FormItem><FormLabel>Required Delivery Port *</FormLabel><FormControl><Input placeholder="e.g. Jebel Ali, Dubai" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="additionalReqs" render={({ field }) => (
                        <FormItem><FormLabel>Additional Requirements</FormLabel><FormControl><Textarea placeholder="Specific packing, documentation needs, etc." className="h-24" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />

                      <FormField control={form.control} name="requestSample" render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border rounded-md">
                          <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>I'd like to request a physical sample first</FormLabel>
                          </div>
                        </FormItem>
                      )} />
                    </div>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                      <h2 className="font-serif text-2xl font-bold">Step 3: Contact Preferences</h2>
                      <div className="grid gap-6 md:grid-cols-2">
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel>Email Address *</FormLabel><FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="phone" render={({ field }) => (
                          <FormItem><FormLabel>Phone / WhatsApp *</FormLabel><FormControl><Input placeholder="+971 50..." {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        
                        <FormField control={form.control} name="prefContact" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Contact Method</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Email">Email</SelectItem>
                                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                                <SelectItem value="Phone Call">Phone Call</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="bestTime" render={({ field }) => (
                          <FormItem>
                            <FormLabel>Best Time to Contact</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Morning">Morning (Your Time)</SelectItem>
                                <SelectItem value="Afternoon">Afternoon (Your Time)</SelectItem>
                                <SelectItem value="Evening">Evening (Your Time)</SelectItem>
                                <SelectItem value="Anytime">Anytime</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="source" render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>How did you find us? *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl><SelectTrigger><SelectValue placeholder="Please select" /></SelectTrigger></FormControl>
                              <SelectContent>
                                <SelectItem value="Google">Google Search</SelectItem>
                                <SelectItem value="Trade Fair">Trade Fair / Exhibition</SelectItem>
                                <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                                <SelectItem value="Referral">Referral / Colleague</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="mt-8 flex justify-between border-t border-gray-100 pt-6">
                    <Button type="button" variant="outline" onClick={prevStep} disabled={step === 1} className="gap-2">
                      <ArrowLeft className="h-4 w-4" /> Back
                    </Button>
                    
                    {step < 3 ? (
                      <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90 gap-2">
                        Next Step <ArrowRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90 px-8 text-lg">
                        {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                      </Button>
                    )}
                  </div>

                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
