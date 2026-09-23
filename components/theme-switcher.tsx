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

  if (!mounted) {
    return (
      <div className="w-9 h-9 p-1 rounded-full border border-border bg-muted/50 animate-pulse" />
    );
  }

  const themes = [
    { value: "light", label: "Clair", icon: "solar:sun-2-bold-duotone" },
    { value: "dark", label: "Sombre", icon: "solar:moon-bold-duotone" },
    { value: "system", label: "Système", icon: "solar:monitor-bold-duotone" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none group cursor-pointer">
        <div className="flex items-center p-1.5 rounded-full border border-border hover:bg-muted/60 transition-colors">
          <Icon 
            icon={resolvedTheme === "dark" ? "solar:moon-bold-duotone" : "solar:sun-2-bold-duotone"} 
            className="h-5 w-5 text-primary transition-transform group-hover:rotate-12"
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        align="end" 
        className="rounded p-1 border-2 border-border shadow-lg min-w-35"
      >
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className="flex items-center gap-3 px-3 py-2 rounded cursor-pointer font-medium hover:bg-muted transition-colors"
          >
            <Icon icon={t.icon} className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm">{t.label}</span>
            {theme === t.value && (
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}