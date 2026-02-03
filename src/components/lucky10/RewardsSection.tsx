"use client";

import { Trophy, Award } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const RewardsSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const rewards = [
    {
      icon: Trophy,
      title: t.rewards.grandJackpot,
      percentage: "60%",
      description: t.rewards.grandDesc,
      color: "neon-gold",
      gradient: "from-amber-500 to-orange-500",
      delay: "0s",
    },
    {
      icon: Award,
      title: t.rewards.luckyWinner,
      percentage: "30%",
      description: t.rewards.luckyDesc,
      color: "neon-cyan",
      gradient: "from-cyan-400 to-blue-500",
      delay: "0.2s",
    },
  ];

  return (
    <section 
      id="rewards" 
      className="py-20 md:py-32 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-heading">
            <span className="text-foreground">{t.rewards.title1}</span>
            <span className="text-gradient">{t.rewards.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-body">
            {t.rewards.description}
          </p>
        </div>

        {/* Reward Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: reward.delay }}
            >
              {/* Card */}
              <div className="relative h-full glass-card rounded-2xl p-8 border border-border/30 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2">
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${reward.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <reward.icon className={`w-8 h-8 bg-gradient-to-br ${reward.gradient} bg-clip-text`} style={{ color: `hsl(var(--${reward.color}))` }} />
                  </div>
                </div>

                {/* Percentage */}
                <div className="mb-4">
                  <span className={`font-numbers text-5xl md:text-6xl font-bold bg-gradient-to-r ${reward.gradient} bg-clip-text text-transparent`}>
                    {reward.percentage}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                  {reward.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm font-body leading-body">
                  {reward.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${reward.gradient} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card border border-border/30">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground font-body">{t.rewards.currentPool}</span>
            <span className="font-numbers text-lg font-bold text-gradient">$125,430</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardsSection;
