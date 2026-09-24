"use client";

import * as React from "react";
import { useLocaleContext } from "@/components/i18n-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocaleContext();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const LanguageLists = [
    { value: "fr", label: "Français", icon: "https://flagcdn.com/w40/fr.png" },
    { value: "en", label: "English", icon: "https://flagcdn.com/w40/gb.png" },
  ];

  const currentLang = LanguageLists.find((l) => l.value === locale) || LanguageLists[0];

  if (!mounted) {
    return (
      <div className="w-9 h-9 p-1 rounded-full border border-border bg-muted/50 animate-pulse" />
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none group cursor-pointer">
        <div className="flex items-center p-1.5 rounded-full border border-border hover:bg-muted/60 transition-colors">
          <img
            src={currentLang.icon}
            alt={currentLang.label}
            className="h-5 w-5 rounded-full object-cover shadow-sm"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="rounded-xl p-1 min-w-35 border-2 border-border shadow-lg"
      >
        {LanguageLists.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setLocale(option.value as "fr" | "en")}
            className={`
              flex items-center gap-2.5 px-3 py-2 rounded-lg cursor-pointer font-medium hover:bg-muted transition-colors
              ${locale === option.value ? "text-primary font-bold" : ""}
            `}
          >
            <img
              src={option.icon}
              alt={option.label}
              className="w-4 h-4 rounded-full object-cover shadow-sm border border-border"
            />
            <span className="text-sm">{option.label}</span>
            {locale === option.value && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}