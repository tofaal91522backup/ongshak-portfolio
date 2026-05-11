// app/contact/page.tsx
"use client";

import {
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
  useState,
} from "react";
import {
  Mail,
  Phone,
  MessageCircle,
  Calendar,
  MapPin,
  Globe,
  Send,
  CheckCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // TODO: wire to your API route / email service
    await new Promise((r) => setTimeout(r, 800));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05070d] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      {/* Hero */}
      <section className="container relative mx-auto px-6 pb-16 pt-32 text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Let&apos;s Build{" "}
          <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
            Something Together
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
          Whether you have a detailed brief or just a rough idea we&apos;re
          ready to listen.
        </p>
      </section>

      {/* Form + Quick Connect */}
      <section className="container relative mx-auto px-6 pb-24">
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="rounded-2xl border-white/10 bg-white/[0.03] text-white">
              <CardContent className="p-8">
                {submitted && (
                  <div className="mb-6 flex items-center gap-3 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                    <CheckCircle2 className="h-5 w-5" />
                    Your enquiry has been submitted successfully.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Name *" htmlFor="name">
                      <Input
                        id="name"
                        placeholder="Your name"
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>

                    <Field label="Email *" htmlFor="email">
                      <Input
                        id="email"
                        required
                        placeholder="you@example.com"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </Field>
                  </div>

                  <Field label="Company / Organisation" htmlFor="company">
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company or organisation"
                      value={form.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </Field>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Project Type">
                      <Select
                        value={form.projectType}
                        onValueChange={(value) =>
                          setForm((prev) => ({
                            ...prev,
                            projectType: value,
                          }))
                        }
                      >
                        <SelectTrigger className={`${inputClass} w-full`}>
                          <SelectValue placeholder="Select Project Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Product Build">
                            Product Build
                          </SelectItem>
                          <SelectItem value="AI/ML Solution">
                            AI/ML Solution
                          </SelectItem>
                          <SelectItem value="Consulting">Consulting</SelectItem>
                          <SelectItem value="Team Augmentation">
                            Team Augmentation
                          </SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>

                    <Field label="Budget Range">
                      <Select
                        value={form.budget}
                        onValueChange={(value) =>
                          setForm((prev) => ({
                            ...prev,
                            budget: value,
                          }))
                        }
                      >
                        <SelectTrigger className={`${inputClass} w-full`}>
                          <SelectValue placeholder="Select Budget" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Under $5K">Under $5K</SelectItem>
                          <SelectItem value="$5K–$15K">$5K–$15K</SelectItem>
                          <SelectItem value="$15K–$50K">$15K–$50K</SelectItem>
                          <SelectItem value="$50K+">$50K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Message" htmlFor="message">
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more about your project, goals, and any specific requirements or questions you have."
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} min-h-32 resize-none`}
                    />
                  </Field>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="group h-12 w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 font-medium text-black hover:opacity-90 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send Enquiry"}
                    <Send className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Quick Connect */}
          <div className="gap-4 lg:col-span-2">
            <ContactCard
              icon={<Mail className="h-5 w-5" />}
              label="Email"
              value="hello@ongshak.com"
              href="mailto:hello@ongshak.com"
            />
            <div className="mt-4">
              <ContactCard
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+880 XXX XXX XXXX"
                href="tel:+880"
              />
            </div>

            <Card className="rounded-2xl mt-4 border-white/10 bg-white/[0.03] text-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 text-amber-400" />
                  <div>
                    <div className="text-sm text-white/50">Office</div>
                    <div className="font-medium">Ongshak</div>
                    <div className="text-sm text-white/70">
                      113/A, Love Road, Tejgaon Industrial Area, Dhaka-1208,
                      Bangladesh
                    </div>
                  </div>
                </div>

                <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg border border-white/10">
                  <iframe
                    title="Ongshak office map"
                    src="https://www.google.com/maps?q=113/A+Love+Road+Tejgaon+Industrial+Area+Dhaka+1208+Bangladesh&output=embed"
                    className="h-full w-full grayscale"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Reach */}
        <Card className="mt-16 rounded-2xl border-white/10 bg-gradient-to-br from-amber-500/10 to-blue-500/10 text-white">
          <CardContent className="p-8 text-center">
            <Globe className="mx-auto h-8 w-8 text-amber-400" />
            <h3 className="mt-4 text-2xl font-semibold">
              Based in Dhaka. Working with clients across 5+ countries.
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              We&apos;ve delivered projects for clients in Bangladesh, Ecuador,
              Portugal, and across South Asia. Time zones don&apos;t stop us.
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

const inputClass =
  "border-white/10 bg-white/[0.03] text-white placeholder:text-white/30 outline-none focus-visible:border-amber-400/50 focus-visible:ring-amber-400/30";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor?: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-sm text-white/70">
        {label}
      </Label>
      {children}
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Card className="rounded-2xl border-white/10 bg-white/[0.03] text-white transition hover:border-amber-400/30 hover:bg-white/[0.05]">
        <CardContent className="flex items-center gap-4 p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
            {icon}
          </div>
          <div>
            <div className="text-xs text-white/50">{label}</div>
            <div className="text-sm font-medium">{value}</div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}
