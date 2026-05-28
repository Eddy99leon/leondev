"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const themes = [
    { value: "light", label: "Light", icon: "solar:sun-2-bold-duotone" },
    { value: "dark", label: "Dark", icon: "solar:moon-bold-duotone" },
    { value: "system", label: "System", icon: "solar:monitor-bold-duotone" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none group cursor-pointer">
        <div className="flex items-center p-1.5 rounded-full bg-white border border-slate-100 shadow-sm transition-all hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-800">
          <Icon 
            icon={resolvedTheme === "dark" ? "solar:moon-bold-duotone" : "solar:sun-2-bold-duotone"} 
            className="h-6 w-6"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="rounded p-1 border-slate-100 min-w-36 bg-white/95 dark:bg-slate-900 dark:border-slate-800"
      >
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className={`
              flex items-center gap-2 px-3 py-2.5 cursor-pointer
              ${theme === t.value 
                ? "bg-violet-50 text-violet-700 font-semibold dark:bg-violet-900/30 dark:text-violet-300" 
                : "hover:bg-slate-50 text-slate-600 dark:text-slate-400 dark:hover:bg-slate-800"}
            `}
          >
            <Icon icon={t.icon} className="w-5 h-5" />
            <span className="text-sm">{t.label}</span>
            {theme === t.value && (
              <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-500" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}