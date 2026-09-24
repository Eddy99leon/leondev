"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_INFO = [
  {
    icon: "solar:letter-bold-duotone",
    label: "Email",
    value: "eddyleon.dev@gmail.com",
    href: "mailto:eddyleon.dev@gmail.com",
    color: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900",
    iconBg: "bg-violet-500",
  },
  {
    icon: "solar:phone-calling-bold-duotone",
    label: "Téléphone / WhatsApp",
    value: "+261 34 50 117 05",
    href: "tel:+261345011705",
    color: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900",
    iconBg: "bg-emerald-500",
  },
  {
    icon: "solar:map-point-bold-duotone",
    label: "Localisation",
    value: "Antananarivo, Madagascar",
    href: null,
    color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900",
    iconBg: "bg-orange-500",
  },
];

const SOCIAL_LINKS = [
  {
    icon: "mdi:github",
    href: "https://github.com",
    label: "GitHub",
    color: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border-slate-200 dark:border-slate-700",
  },
  {
    icon: "mdi:linkedin",
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/40 border-blue-100 dark:border-blue-900",
  }
];

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setFormState("idle"), 4000);
    } catch {
      setFormState("error");
      setTimeout(() => setFormState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="w-full bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-16">

        <div className="flex flex-col items-center text-center gap-2 mb-6">
          <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-pink-50 dark:bg-pink-950/40 border border-pink-200 dark:border-pink-900 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-pink-500" />
            </span>
            <span className="text-xs font-bold text-pink-700 dark:text-pink-400 tracking-widest uppercase">
              Contact & Opportunités
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
            Discutons d'un Poste ou d'une Collaboration
          </h2>
          <p className="text-muted-foreground max-w-3xl text-sm md:text-base leading-relaxed">
            Vous recherchez un Développeur Fullstack réactif pour renforcer votre équipe ? N'hésitez pas à me contacter, je vous répondrai dans les plus brefs délais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 flex flex-col gap-3">
            {CONTACT_INFO.map((info) => (
              <div
                key={info.label}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 ${info.color} hover:-translate-y-0.5 transition-all duration-300 shadow-sm`}
              >
                <div className={`w-11 h-11 rounded-xl ${info.iconBg} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon icon={info.icon} className="text-white w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider opacity-75">
                    {info.label}
                  </span>
                  {info.href ? (
                    <Link
                      href={info.href}
                      className="text-sm font-bold hover:underline"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold">
                      {info.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="p-5 rounded-xl border-2 border-border/80 bg-card/50 backdrop-blur-sm mt-1">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-3">
                Mes Réseaux Professionnels
              </p>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl border-2 transition-all hover:scale-[1.02] ${social.color}`}
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                    <span className="text-xs font-bold">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="p-6 sm:p-8 rounded-2xl border-2 border-border/80 bg-card/50 backdrop-blur-sm shadow-lg">

              {formState === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-900 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shrink-0">
                    <Icon icon="solar:check-circle-bold" className="text-white w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-emerald-700 dark:text-emerald-400">
                    Votre message a bien été envoyé ! Je vous recontacterai rapidement.
                  </p>
                </div>
              )}

              {formState === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border-2 border-red-200 dark:border-red-900 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center shrink-0">
                    <Icon icon="solar:close-circle-bold" className="text-white w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-red-700 dark:text-red-400">
                    Une erreur est survenue lors de l'envoi. Veuillez réessayer ou m'envoyer un email direct.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Nom complet
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ex: Jean Dupont"
                      required
                      className="h-11 rounded-xl border-2 border-border bg-muted/20 focus:border-primary transition-colors font-medium text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground">
                      Adresse email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@entreprise.com"
                      required
                      className="h-11 rounded-xl border-2 border-border bg-muted/20 focus:border-primary transition-colors font-medium text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Sujet
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Ex: Proposition de poste Développeur Fullstack"
                    required
                    className="h-11 rounded-xl border-2 border-border bg-muted/20 focus:border-primary transition-colors font-medium text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Bonjour Eddy, nous avons parcouru votre profil et aimerions échanger avec vous..."
                    required
                    rows={5}
                    className="rounded-xl border-2 border-border bg-muted/20 focus:border-primary transition-colors font-medium text-sm resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={formState === "sending"}
                  className="h-12 rounded-xl font-bold text-base w-full shadow-md mt-2"
                >
                  {formState === "sending" ? (
                    <>
                      <Icon icon="solar:refresh-bold-duotone" className="mr-2 w-5 h-5 animate-spin" />
                      Envoi du message en cours...
                    </>
                  ) : (
                    <>
                      <Icon icon="solar:letter-bold-duotone" className="mr-2 w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}