"use client";
import { UserX, Send, Coins } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturesSection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const features = [
    {
      icon: UserX,
      title: t.features.noKyc,
      description: t.features.noKycDesc,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Send,
      title: t.features.telegramApp,
      description: t.features.telegramAppDesc,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Coins,
      title: t.features.cryptoSmartContract,
      description: t.features.cryptoSmartContractDesc,
      gradient: "from-amber-400 to-orange-500",
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-heading">
            <span className="text-foreground">{t.features.title1}</span>
            <span className="text-gradient">{t.features.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-body">
            {t.features.description}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-full p-8 rounded-2xl border border-border/30 bg-gradient-card hover:border-primary/30 transition-all duration-500">
                {/* Animated Background */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                    <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-foreground" />
                    </div>
                  </div>
                  {/* Glow */}
                  <div className={`absolute inset-0 w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} blur-xl opacity-30 group-hover:opacity-50 transition-opacity`} />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-body font-body">
                  {feature.description}
                </p>

                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.gradient} opacity-5 rotate-45 translate-x-16 -translate-y-16`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
