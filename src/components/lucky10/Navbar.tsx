"use client";

import { useState, useEffect } from "react";
import { Menu, X, Zap, Sun, Moon, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage, languages, Language } from "@/contexts/LanguageContext";
import { JACKPOT_ENTRY_URL } from "@/lib/links";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [roundStatus, setRoundStatus] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const currentLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("lucky10-theme");

    if (savedTheme === "dark" || savedTheme === "light") {
      root.classList.remove("dark", "light");
      root.classList.add(savedTheme);
      setIsDarkMode(savedTheme === "dark");
      return;
    }

    const hasDark = root.classList.contains("dark");
    const hasLight = root.classList.contains("light");

    // If both are present (can happen due to older logic), keep only one.
    if (hasDark && hasLight) {
      root.classList.remove("light");
    }

    // If none is set, default to system preference.
    if (!root.classList.contains("dark") && !root.classList.contains("light")) {
      const prefersDark = window.matchMedia
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
        : true;
      root.classList.add(prefersDark ? "dark" : "light");
      setIsDarkMode(prefersDark);
      localStorage.setItem("lucky10-theme", prefersDark ? "dark" : "light");
      return;
    }

    setIsDarkMode(root.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const loadStatus = async () => {
      try {
        const response = await fetch("/api/rounds/public", { cache: "no-store" });
        if (!response.ok) throw new Error(`Failed to load status: ${response.status}`);
        const data = await response.json();
        const status = typeof data?.status === "string" ? data.status : null;
        setRoundStatus(status);
      } catch (error) {
        console.error("Failed to fetch round status:", error);
        setRoundStatus(null);
      }
    };

    loadStatus();
    const interval = setInterval(loadStatus, 30000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !root.classList.contains("dark");

    root.classList.remove("dark", "light");
    root.classList.add(nextIsDark ? "dark" : "light");

    setIsDarkMode(nextIsDark);
    localStorage.setItem("lucky10-theme", nextIsDark ? "dark" : "light");
  };

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#rewards", label: t.navbar.prizes },
    { href: "#features", label: t.navbar.features },
    { href: "#winners", label: t.navbar.winners },
    { href: "#how-it-works", label: t.navbar.howItWorks },
  ];

  const scrollToSection = (href: string) => {
    if (!isHomePage) {
      // Navigate to home page with hash
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto px-4">
        {/* Two-row layout for desktop */}
        <div className="flex flex-col">
          {/* Top Row: Language (left), Logo (center), Theme + CTA (right) */}
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Language Selector */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="hidden sm:inline">{currentLang.flag} {currentLang.name}</span>
                    <span className="sm:hidden">{currentLang.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-card border-border/50 animate-scale-in">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`cursor-pointer hover:bg-primary/20 transition-colors ${
                        language === lang.code ? "bg-primary/10 text-primary" : ""
                      }`}
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Live Jackpot Status (positioned without changing navbar height) */}
              <div className="absolute left-0 top-full mt-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-primary/30 text-xs text-muted-foreground whitespace-nowrap">
                <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                <span>
                  {roundStatus === "active"
                    ? t.status.active
                    : roundStatus === "upcoming"
                    ? t.status.upcoming
                    : roundStatus === "ended"
                    ? t.status.ended
                    : roundStatus === "paused"
                    ? t.status.paused
                    : t.status.active}
                </span>
                <Zap className="w-3 h-3 text-neon-gold animate-pulse" />
              </div>
            </div>

            {/* Centered Logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110 animate-pulse" />
                <div className="absolute inset-0 bg-primary/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-glow-pulse" />
              </div>
              <span className="font-heading text-xl md:text-2xl font-bold text-gradient neon-text">
                Lucky10
              </span>
            </Link>

            {/* Right Side: Theme Toggle + CTA */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="relative overflow-hidden group hover:scale-110 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-neon-gold transition-all duration-300 group-hover:rotate-180" />
                ) : (
                  <Moon className="w-5 h-5 text-primary transition-all duration-300 group-hover:-rotate-12" />
                )}
              </Button>

              {/* CTA Button */}
              <Button
                asChild
                className="hidden sm:flex bg-gradient-primary hover:opacity-90 neon-glow transition-all duration-300 font-ui text-sm hover:scale-105 animate-pulse-slow"
              >
                <a href={JACKPOT_ENTRY_URL} target="_blank" rel="noopener noreferrer">
                  {t.navbar.enterJackpot}
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-foreground p-2"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Second Row: Navigation Links (always visible on desktop) */}
          <div className="hidden md:flex items-center justify-center gap-6 pb-3 border-t border-border/20 pt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              {/* Mobile Navigation Links (always visible) */}
              <div className="flex flex-col gap-2 px-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="px-3 py-2 rounded-lg text-sm text-start font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              {/* Mobile Language Options */}
              <div className="flex flex-wrap gap-2 px-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-300 ${
                      language === lang.code
                        ? "bg-primary/20 text-primary border border-primary/50"
                        : "glass-card text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
              <Button asChild className="bg-gradient-primary hover:opacity-90 neon-glow mt-2 font-ui">
                <a href={JACKPOT_ENTRY_URL} target="_blank" rel="noopener noreferrer">
                  {t.navbar.enterJackpot}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
