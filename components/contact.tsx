"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_INFO = [
  {
    icon: "solar:letter-bold-duotone",
    labelKey: "info_email",
    value: "hello@leon.dev",
    href: "mailto:hello@leon.dev",
    color: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400 border-violet-100 dark:border-violet-900",
    iconBg: "bg-violet-500",
  },
  {
    icon: "solar:map-point-bold-duotone",
    labelKey: "info_location",
    value: "Paris, France",
    href: null,
    color: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-900",
    iconBg: "bg-blue-500",
  },
  {
    icon: "solar:clock-circle-bold-duotone",
    labelKey: "info_availability",
    valueKey: "info_availability_value",
    href: null,
    color: "bg-orange-50 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border-orange-100 dark:border-orange-900",
    iconBg: "bg-orange-500",
  },
  {
    icon: "solar:stopwatch-bold-duotone",
    labelKey: "info_response",
    valueKey: "info_response_value",
    href: null,
    color: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border-pink-100 dark:border-pink-900",
    iconBg: "bg-pink-500",
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
  },
  {
    icon: "mdi:twitter",
    href: "https://twitter.com",
    label: "Twitter",
    color: "bg-sky-50 dark:bg-sky-950/40 text-sky-500 dark:text-sky-400 hover:bg-sky-100 dark:hover:bg-sky-900/40 border-sky-100 dark:border-sky-900",
  },
  {
    icon: "mdi:dribbble",
    href: "https://dribbble.com",
    label: "Dribbble",
    color: "bg-pink-50 dark:bg-pink-950/40 text-pink-500 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/40 border-pink-100 dark:border-pink-900",
  },
];

type FormState = "idle" | "sending" | "success" | "error";

export function Contact() {
  const t = useTranslations("Contact");

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

    // Simule un envoi (remplace par ton API)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simule succès
    setFormState("success");
    setForm({ name: "", email: "", subject: "", message: "" });

    // Reset après 4 secondes
    setTimeout(() => setFormState("idle"), 4000);
  };

  return (
    <section className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-14 lg:py-18">

        <div className="flex flex-col items-center text-center gap-1 mb-6">
            <div className="px-3 py-0 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest">
                    {t("badge")}
                </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold tracking-tighter text-foreground">
                {t("title")}
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed">
                {t("description")}
            </p>
        </div>

        {/* ===== MAIN GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* ===== COLONNE GAUCHE : Infos + Socials ===== */}
          <div className="lg:col-span-2 flex flex-col gap-4">

            {/* Infos de contact */}
            {CONTACT_INFO.map((info) => (
              <div
                key={info.labelKey}
                className={`flex items-center gap-4 p-4 rounded-2xl border-2 ${info.color} hover:-translate-y-1 transition-all duration-300`}
              >
                <div className={`w-10 h-10 rounded-xl ${info.iconBg} flex items-center justify-center shrink-0 shadow-md`}>
                  <Icon icon={info.icon} className="text-white w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                    {t(info.labelKey as any)}
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
                      {info.value ?? t(info.valueKey as any)}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Réseaux Sociaux */}
            <div className="p-5 rounded-2xl border-2 border-border bg-background mt-2">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-4">
                {t("social_title")}
              </p>
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-all hover:scale-105 ${social.color}`}
                  >
                    <Icon icon={social.icon} className="w-5 h-5" />
                    <span className="text-sm font-bold">{social.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ===== COLONNE DROITE : Formulaire ===== */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl border-2 border-border bg-background shadow-[4px_4px_0px_rgba(0,0,0,0.04)]">

              {/* Succès */}
              {formState === "success" && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-100 dark:border-emerald-900 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <Icon icon="solar:check-circle-bold" className="text-white w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    {t("form_success")}
                  </p>
                </div>
              )}

              {/* Erreur */}
              {formState === "error" && (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border-2 border-red-100 dark:border-red-900 mb-6">
                  <div className="w-8 h-8 rounded-xl bg-red-500 flex items-center justify-center shrink-0">
                    <Icon icon="solar:close-circle-bold" className="text-white w-5 h-5" />
                  </div>
                  <p className="text-sm font-bold text-red-600 dark:text-red-400">
                    {t("form_error")}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nom + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-sm font-bold text-foreground">
                      {t("form_name")}
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t("form_name_placeholder")}
                      required
                      className="h-12 rounded-2xl border-2 border-border bg-muted/30 focus:border-primary transition-colors font-medium"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-sm font-bold text-foreground">
                      {t("form_email")}
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t("form_email_placeholder")}
                      required
                      className="h-12 rounded-2xl border-2 border-border bg-muted/30 focus:border-primary transition-colors font-medium"
                    />
                  </div>
                </div>

                {/* Sujet */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject" className="text-sm font-bold text-foreground">
                    {t("form_subject")}
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={t("form_subject_placeholder")}
                    required
                    className="h-12 rounded-2xl border-2 border-border bg-muted/30 focus:border-primary transition-colors font-medium"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-sm font-bold text-foreground">
                    {t("form_message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t("form_message_placeholder")}
                    required
                    rows={6}
                    className="rounded-2xl border-2 border-border bg-muted/30 focus:border-primary transition-colors font-medium resize-none"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={formState === "sending"}
                  className="h-14 rounded-2xl font-bold text-base w-full"
                >
                  {formState === "sending" ? (
                    <>
                      <Icon icon="solar:refresh-bold-duotone" className="mr-2 w-5 h-5 animate-spin" />
                      {t("form_sending")}
                    </>
                  ) : (
                    <>
                      <Icon icon="solar:letter-bold-duotone" className="mr-2 w-5 h-5" />
                      {t("form_submit")}
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