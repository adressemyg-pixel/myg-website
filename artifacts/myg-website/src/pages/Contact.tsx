import { useSubmitContact } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
  organization: z.string().optional(),
  phone: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const submitContact = useSubmitContact();
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      organization: "",
      phone: "",
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await submitContact.mutateAsync({ data });
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. We will get back to you shortly.",
      });
      form.reset();
    } catch (err: any) {
      toast({
        title: "Failed to send message",
        description: err.message || "An unexpected error occurred.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <section className="py-24 bg-zinc-950 text-foreground text-center px-4">
        <h1 className="text-5xl font-serif font-bold mb-6 text-accent">Contact MYG</h1>
        <p className="text-xl max-w-2xl mx-auto text-foreground/70">
          Reach out for partnerships, event inquiries, or to learn how to join the movement.
        </p>
      </section>

      <section className="py-24 container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Info Side */}
          <div className="lg:col-span-1 space-y-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">Headquarters</h2>
              <div className="space-y-6 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Casablanca, Morocco</p>
                    <p>Operating nationally across major educational institutions.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent shrink-0" />
                  <p className="font-medium text-foreground">contact@myg.ma</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-muted border-l-4 border-accent">
              <h3 className="text-xl font-serif font-bold text-primary mb-3">School Partnerships</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in bringing MYG to your campus? Mention "School Partnership" in your subject line for expedited routing to our Schools Department.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-card p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Send a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="rounded-none bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Email Address *</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" type="email" {...field} className="rounded-none bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">School / Organization</FormLabel>
                          <FormControl>
                            <Input placeholder="Optional" {...field} className="rounded-none bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground">Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Optional" {...field} className="rounded-none bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Subject *</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help?" {...field} className="rounded-none bg-background" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Message *</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message here..." className="min-h-[150px] rounded-none bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={submitContact.isPending}
                    className="w-full md:w-auto px-10 h-12 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                  >
                    {submitContact.isPending ? (
                      <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Sending...</>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
