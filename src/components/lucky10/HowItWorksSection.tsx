"use client";

import { Ticket, Clock, Trophy, ChevronRight, ChevronLeft } from "lucide-react";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { JACKPOT_ENTRY_URL } from "@/lib/links";

const HowItWorksSection = () => {
  const { t, isRTL } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const steps = [
    {
      icon: Ticket,
      step: "01",
      title: t.howItWorks.step2,
      description: t.howItWorks.step2Desc,
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Clock,
      step: "02",
      title: t.howItWorks.step3,
      description: t.howItWorks.step3Desc,
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Trophy,
      step: "03",
      title: t.howItWorks.step4,
      description: t.howItWorks.step4Desc,
      color: "from-green-500 to-emerald-400",
    },
  ];

  const ArrowIcon = isRTL ? ChevronLeft : ChevronRight;

  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-card" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-heading">
            <span className="text-foreground">{t.howItWorks.title1}</span>
            <span className="text-gradient">{t.howItWorks.title2}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-body">
            {t.howItWorks.description}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connection Line - Desktop */}
            <div className={`hidden md:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary/50 via-secondary/50 to-neon-green/50 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

            {steps.map((step, index) => (
              <div
                key={step.step}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                {/* Step Card */}
                <div className="group relative text-center">
                  {/* Icon Container */}
                  <div className="relative mx-auto mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} p-0.5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                    {/* Glow */}
                    <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} blur-xl opacity-30 group-hover:opacity-50 transition-opacity mx-auto`} />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="font-numbers text-xs font-bold text-primary">{step.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-body font-body">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <ArrowIcon className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a
            href={JACKPOT_ENTRY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-primary font-ui font-semibold text-primary-foreground hover:opacity-90 neon-glow transition-all duration-300 hover:scale-105"
          >
            {t.howItWorks.startPlaying}
            <ArrowIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
