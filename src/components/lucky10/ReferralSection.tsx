"use client";

import { Users, Percent } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { JACKPOT_ENTRY_URL } from "@/lib/links";

const ReferralSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const highlights = [
    {
      icon: Users,
      title: t.referral.inviteTitle,
      description: t.referral.inviteDesc,
      gradient: "from-neon-cyan/40 to-primary/30",
    },
    {
      icon: Percent,
      title: t.referral.earnTitle,
      description: t.referral.earnDesc,
      gradient: "from-neon-gold/40 to-orange-400/30",
    },
  ];

  return (
    <section id="referral" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-heading">
            <span className="text-foreground">{t.referral.title1}</span>
            <span className="text-gradient">{t.referral.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto font-body leading-body">
            {t.referral.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-12">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl border border-border/30 bg-card/50 backdrop-blur-sm p-6 md:p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/40 to-secondary/30 p-0.5 mb-4">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-semibold mb-2">
                  <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </h3>
                <p className={`text-sm text-muted-foreground font-body leading-body ${isRTL ? "text-right" : "text-left"}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card border border-border/30 mb-6">
            <span className="font-numbers text-lg md:text-xl font-bold text-gradient">50%</span>
            <span className="text-sm text-muted-foreground font-body">{t.referral.badge}</span>
          </div>
          <div>
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 neon-glow px-8 py-6 text-lg font-ui font-semibold">
              <a href={JACKPOT_ENTRY_URL} target="_blank" rel="noopener noreferrer">
                {t.referral.cta}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;
