"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles, Zap, Star, Trophy, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { JACKPOT_ENTRY_URL } from "@/lib/links";

type PublicRound = {
  roundNumber: number;
  prizePool: number;
  endDate: string;
  startDate: string;
  totalTickets: number;
  status: string;
};

const fetchPublicRound = async (): Promise<PublicRound> => {
  const response = await fetch("/api/rounds/public", { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Failed to load public round: ${response.status}`);
  }
  return response.json();
};

const computeTimeLeft = (endDateMs: number) => {
  const diff = Math.max(0, endDateMs - Date.now());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
};

const HeroSection = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30,
  });
  
  const [jackpotPool, setJackpotPool] = useState<number>(0);
  const [displayedPool, setDisplayedPool] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [roundEndMs, setRoundEndMs] = useState<number | null>(null);

  // Fetch jackpot pool from API
  useEffect(() => {
    const loadRound = async () => {
      try {
        const round = await fetchPublicRound();
        setJackpotPool(round.prizePool ?? 0);
        const endMs = Number.isFinite(Date.parse(round.endDate))
          ? Date.parse(round.endDate)
          : null;
        setRoundEndMs(endMs);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to fetch public round:", error);
        setIsLoading(false);
      }
    };
    
    loadRound();
    // Refresh every 30 seconds
    const interval = setInterval(loadRound, 30000);
    return () => clearInterval(interval);
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (jackpotPool === 0) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = jackpotPool / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= jackpotPool) {
        setDisplayedPool(jackpotPool);
        clearInterval(timer);
      } else {
        setDisplayedPool(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [jackpotPool]);

  useEffect(() => {
    if (!roundEndMs) return;
    setTimeLeft(computeTimeLeft(roundEndMs));
    const timer = setInterval(() => {
      setTimeLeft(computeTimeLeft(roundEndMs));
    }, 1000);
    return () => clearInterval(timer);
  }, [roundEndMs]);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");
  
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* GIF Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 dark:opacity-30"
          style={{
            backgroundImage: `url('https://downloadwap.com/thumbs3/screensavers/d/new/abstract/neon_tits-42394.gif')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Animated Background Effects */}
      <div className="absolute inset-0 z-[1]">
        {/* Gradient Orbs with Enhanced Animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/15 rounded-full blur-[150px] animate-pulse" />
        
        {/* More Floating Particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              background: i % 4 === 0 ? 'hsl(var(--neon-purple))' : i % 4 === 1 ? 'hsl(var(--neon-blue))' : i % 4 === 2 ? 'hsl(var(--neon-cyan))' : 'hsl(var(--neon-gold))',
            }}
          />
        ))}

        {/* Floating Icons */}
        <Sparkles className="absolute top-[20%] left-[10%] w-6 h-6 text-neon-gold/60 animate-float" style={{ animationDelay: "0s" }} />
        <Star className="absolute top-[30%] right-[15%] w-8 h-8 text-neon-pink/60 animate-float" style={{ animationDelay: "1s" }} />
        <Zap className="absolute bottom-[30%] left-[20%] w-7 h-7 text-neon-cyan/60 animate-float" style={{ animationDelay: "2s" }} />
        <Sparkles className="absolute bottom-[25%] right-[10%] w-5 h-5 text-primary/60 animate-float" style={{ animationDelay: "3s" }} />

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Radial Lines Effect */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px]"
            style={{
              background: 'repeating-conic-gradient(from 0deg, transparent 0deg, transparent 10deg, hsl(var(--primary) / 0.1) 10deg, hsl(var(--primary) / 0.1) 11deg)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline with Enhanced Effects */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in leading-heading" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground inline-block hover:scale-105 transition-transform duration-300">{t.hero.headline1}</span>
            <br />
            <span className="text-gradient neon-text inline-block animate-text-glow hover:scale-105 transition-transform duration-300">{t.hero.headline2}</span>
          </h1>

          {/* Subheading */}
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in leading-body" style={{ animationDelay: "0.2s" }}>
            {t.hero.subheading}
          </p>

          {/* Current Jackpot Pool Display */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="relative inline-block">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-gold/30 via-primary/30 to-neon-gold/30 blur-3xl rounded-full scale-150" />
              
              <div className="relative glass-card border-2 border-neon-gold/50 rounded-2xl p-6 md:p-8 neon-glow overflow-hidden group hover:border-neon-gold/80 transition-all duration-500">
                {/* Shimmer effect */}
                <div className="absolute inset-0 shimmer" />
                
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-gold/5 via-primary/10 to-neon-gold/5 animate-pulse" />
                
                {/* Trophy icon with glow */}
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="relative">
                    <Trophy className="w-8 h-8 text-neon-gold animate-pulse" />
                    <div className="absolute inset-0 bg-neon-gold/50 blur-lg rounded-full" />
                  </div>
                  <span className="text-sm md:text-base font-ui font-semibold text-neon-gold uppercase tracking-widest">
                    {t.hero.currentJackpot || "Current Jackpot Pool"}
                  </span>
                  <TrendingUp className="w-5 h-5 text-neon-green animate-bounce" />
                </div>
                
                {/* Jackpot amount */}
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="h-12 md:h-16 bg-gradient-to-r from-muted/20 via-muted/40 to-muted/20 rounded-lg animate-pulse" />
                  ) : (
                    <span className="font-numbers text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-neon-gold via-yellow-300 to-neon-gold bg-clip-text text-transparent drop-shadow-2xl">
                      {formatCurrency(displayedPool)}
                    </span>
                  )}
                </div>
                
                {/* USDT indicator */}
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="text-xs text-muted-foreground font-ui">TON Network</span>
                  <span className="w-1.5 h-1.5 bg-neon-green rounded-full animate-pulse" />
                  <span className="text-xs text-neon-green font-ui">Live</span>
                </div>
              </div>
            </div>
          </div>

          {/* Countdown Timer with Enhanced Glow */}
          <div className="mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-sm text-muted-foreground mb-4 font-medium tracking-wider uppercase flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-primary/50" />
              {t.hero.nextDraw}
              <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-primary/50" />
            </p>
            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
              {[
                { value: timeLeft.days, label: t.hero.days || "DAYS" },
                { value: timeLeft.hours, label: t.hero.hours },
                { value: timeLeft.minutes, label: t.hero.minutes },
                { value: timeLeft.seconds, label: t.hero.seconds },
              ].map((item, index) => (
                <div key={item.label} className="flex items-center">
                  <div className="countdown-pulse group">
                    <div className="glass-card border border-primary/30 rounded-xl p-3 md:p-5 min-w-[65px] md:min-w-[90px] neon-glow relative overflow-hidden group-hover:border-primary/60 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="font-numbers text-2xl md:text-4xl font-bold text-gradient relative z-10">
                        {formatNumber(item.value)}
                      </span>
                      <p className="text-[10px] md:text-xs text-muted-foreground mt-1 font-ui font-medium relative z-10">{item.label}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <span className="text-2xl md:text-4xl font-numbers text-primary mx-0.5 md:mx-1 animate-pulse neon-text">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Single CTA Button */}
          <div className="flex items-center justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 neon-glow px-10 py-7 text-lg font-ui font-semibold transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            >
              <a href={JACKPOT_ENTRY_URL} target="_blank" rel="noopener noreferrer">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Zap className="w-5 h-5 mr-2 animate-pulse" />
                <span className="relative z-10">{t.hero.enterNow}</span>
              </a>
            </Button>
          </div>

          {/* Stats hidden for now */}
        </div>
      </div>

      {/* Scroll Indicator with Glow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="relative">
          <ChevronDown className="w-6 h-6 text-primary" />
          <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
