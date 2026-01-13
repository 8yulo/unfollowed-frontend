"use client";

import { createContext, useContext, useEffect, useState, useRef } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  isTransitioning: boolean;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const TRANSITION_COOLDOWN_MS = 1000; // 1 second cooldown between theme toggles

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lastToggleRef = useRef<number>(0);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    // Check localStorage first, then system preference
    const stored = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (systemPrefersDark ? "dark" : "light");
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    
    // Add transition class temporarily for smooth animation
    root.classList.add("theme-transitioning");
    
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(() => {
      if (newTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      
      // Remove transition class after animation completes
      setTimeout(() => {
        root.classList.remove("theme-transitioning");
      }, 350); // Slightly longer than transition duration
    });
  };

  const toggleTheme = () => {
    const now = Date.now();
    const timeSinceLastToggle = now - lastToggleRef.current;
    
    // If clicked too soon, ignore the toggle
    if (timeSinceLastToggle < TRANSITION_COOLDOWN_MS) {
      return;
    }
    
    // Clear any existing transition timeout
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
    }
    
    lastToggleRef.current = now;
    setIsTransitioning(true);
    
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
    
    // Reset transitioning state after transition completes
    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, TRANSITION_COOLDOWN_MS);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Always provide the context, even before mounting
  // The inline script in layout.tsx handles the initial theme application
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
