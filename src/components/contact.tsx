"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-headline font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
            Get Your Own Card
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Like what you see? Let's work together to create a card for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2 space-y-8">
            <h3 className="text-2xl font-headline text-primary">Contact Info</h3>
            <div className="space-y-6">
              <a href="tel:+1234567890" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:hello@cardfolio.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                <span>hello@cardfolio.com</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground group">
                <MapPin className="w-6 h-6 text-accent group-hover:text-primary transition-colors" />
                <span>123 Design St, Creative City</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <Card className="glassmorphism-card">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground/80">Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="What should I call you?" {...field} className="bg-transparent/20 border-white/20 focus:ring-accent" />
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
                          <FormLabel className="text-foreground/80">Your Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Where can I reach you?" {...field} className="bg-transparent/20 border-white/20 focus:ring-accent" />
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
                          <FormLabel className="text-foreground/80">Your Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your business and what you're looking for..."
                              className="bg-transparent/20 border-white/20 focus:ring-accent"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant="futuristic" size="lg">Send Message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
