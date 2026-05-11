"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

type Theme = "light" | "dark" | "system";

type ThemeContextType = {
  theme: Theme;
  changeTheme: (theme: Theme) => void;
  mounted: boolean;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);

    audioRef.current = new Audio("/click.mp3");

    const storedTheme = (localStorage.getItem("theme") ||
      "system") as Theme;

    setTheme(storedTheme);

    applyTheme(storedTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );

    const handleSystemTheme = () => {
      const currentTheme = (localStorage.getItem("theme") ||
        "system") as Theme;

      if (currentTheme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleSystemTheme);

    return () => {
      mediaQuery.removeEventListener("change", handleSystemTheme);
    };
  }, []);

  const playClickSound = async () => {
    try {
      if (!audioRef.current) return;

      audioRef.current.currentTime = 0;

      await audioRef.current.play();
    } catch {}
  };

  const applyTheme = (mode: Theme) => {
    const root = document.documentElement;

    if (mode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;

      root.classList.toggle("dark", prefersDark);

      return;
    }

    root.classList.toggle("dark", mode === "dark");
  };

  const changeTheme = async (mode: Theme) => {
    setTheme(mode);

    localStorage.setItem("theme", mode);

    applyTheme(mode);

    await playClickSound();
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
        mounted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }

  return context;
}