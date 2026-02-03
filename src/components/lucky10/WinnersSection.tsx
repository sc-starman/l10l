"use client";

import { PartyPopper, Trophy, Star } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WinnersSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const winners = [
    {
      username: "CryptoKing_99",
      amount: "$12,450",
      timeValue: 2,
      timeType: "hours",
      tier: "jackpot",
      avatar: "CK",
    },
    {
      username: "LuckyStrike",
      amount: "$3,200",
      timeValue: 5,
      timeType: "hours",
      tier: "big",
      avatar: "LS",
    },
    {
      username: "Player_One",
      amount: "$890",
      timeValue: 8,
      timeType: "hours",
      tier: "lucky",
      avatar: "PO",
    },
    {
      username: "NeonRider",
      amount: "$15,780",
      timeValue: 1,
      timeType: "day",
      tier: "jackpot",
      avatar: "NR",
    },
    {
      username: "StarGazer42",
      amount: "$2,100",
      timeValue: 1,
      timeType: "day",
      tier: "big",
      avatar: "SG",
    },
  ];

  const getTierStyles = (tier: string) => {
    switch (tier) {
      case "jackpot":
        return {
          badge: "bg-gradient-to-r from-amber-500 to-orange-500",
          glow: "shadow-amber-500/30",
          icon: Trophy,
        };
      case "big":
        return {
          badge: "bg-gradient-to-r from-cyan-400 to-blue-500",
          glow: "shadow-cyan-500/30",
          icon: Star,
        };
      default:
        return {
          badge: "bg-gradient-to-r from-pink-500 to-purple-500",
          glow: "shadow-pink-500/30",
          icon: PartyPopper,
        };
    }
  };

  const getTimeText = (value: number, type: string) => {
    return `${value} ${type === "hours" ? t.winners.hoursAgo : t.winners.dayAgo}`;
  };

  return (
    <section id="winners" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <PartyPopper className="w-6 h-6 text-neon-gold" />
            <span className="text-sm text-muted-foreground uppercase tracking-wider">{t.winners.realPayouts}</span>
            <PartyPopper className="w-6 h-6 text-neon-gold" />
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-heading">
            <span className="text-foreground">{t.winners.title1}</span>
            <span className="text-gradient">{t.winners.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-body">
            {t.winners.description}
          </p>
        </div>

        {/* Winners List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {winners.map((winner, index) => {
            const tierStyles = getTierStyles(winner.tier);
            const TierIcon = tierStyles.icon;
            
            return (
              <div
                key={index}
                className={`group glass-card rounded-xl p-4 md:p-6 border border-border/30 hover:border-primary/30 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div className={`w-12 h-12 rounded-full ${tierStyles.badge} p-0.5 flex-shrink-0`}>
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <span className="font-numbers text-sm font-bold">{winner.avatar}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-ui font-semibold text-foreground">{winner.username}</span>
                        <TierIcon className="w-4 h-4 text-neon-gold" />
                      </div>
                      <span className="text-sm text-muted-foreground font-body">
                        {getTimeText(winner.timeValue, winner.timeType)}
                      </span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="text-right">
                    <div className="flex items-center gap-2">
                      <PartyPopper className="w-4 h-4 text-neon-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className={`font-numbers text-xl md:text-2xl font-bold text-gradient ${tierStyles.glow}`}>
                        {winner.amount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More */}
        <div className={`text-center mt-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="text-primary hover:text-primary/80 font-ui font-medium transition-colors">
            {t.winners.viewAll}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WinnersSection;
