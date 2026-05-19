'use client'


import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(systemDark ? "dark" : "light");
  }, []);

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

/*
import { ThemeProviderProps } from "next-themes"
import { ThemeProvider as NextThemeProvider } from "next-themes"


export default function ThemeProvider({ children, ...props}: ThemeProviderProps) {
  return <NextThemeProvider
  attribute="class"
  defaultTheme="system"
  enableSystem
  forcedTheme={undefined}
  >{children}</NextThemeProvider>;
}
*/

