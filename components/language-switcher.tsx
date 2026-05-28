"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("Common");

  const LanguageLists = [
    { value: 'fr', nameKey: 'languages.french', icon: 'https://flagcdn.com/w40/fr.png' },
    { value: 'en', nameKey: 'languages.english', icon: 'https://flagcdn.com/w40/gb.png' },
  ];

  const currentLocale = pathname.split("/")[1] || "fr";
  const currentLang = LanguageLists.find((l) => l.value === currentLocale) || LanguageLists[1];

  const switchLocale = (locale: string) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none group cursor-pointer">
        <div className="flex items-center p-1.5 rounded-full bg-white border border-slate-100 shadow-sm transition-all hover:bg-slate-50">
          <img 
            src={currentLang.icon} 
            alt={currentLang.value} 
            className="h-6 w-6 rounded-full object-cover border border-slate-100"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="rounded p-1 border-slate-100 min-w-44 bg-white/95"
      >
        <div className="max-h-75 overflow-y-auto scrollbar-hide p-1">
          {LanguageLists.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => switchLocale(option.value)}
              className={`
                flex items-center gap-2 px-3 py-2.5 cursor-pointer
                ${currentLocale === option.value 
                  ? "bg-violet-50 text-violet-700 font-semibold" 
                  : "hover:bg-slate-50 text-slate-600"}
              `}
            >
              <img 
                src={option.icon} 
                alt={option.value} 
                className="w-5 h-5 rounded-full object-cover shadow-sm border border-slate-100"
              />
              <span className="text-sm">
                {t(option.nameKey)}
              </span>
              {currentLocale === option.value && (
                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500" />
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}