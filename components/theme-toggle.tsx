"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
    >
      <Icon icon="mdi:theme-light-dark" className="h-5 w-5" />
    </Button>
  );
}