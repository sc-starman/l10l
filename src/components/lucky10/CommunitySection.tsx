"use client";

import { Users, Twitter, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CommunitySection = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const socials = [
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@Lucky10Game",
      followers: "125K",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:border-blue-500/50",
    },
    {
      icon: MessageCircle,
      name: "Discord",
      handle: "Lucky10 Community",
      followers: "45K",
      color: "from-indigo-400 to-purple-600",
      hoverColor: "hover:border-purple-500/50",
    },
    {
      icon: Send,
      name: "Telegram",
      handle: "@Lucky10Official",
      followers: "89K",
      color: "from-cyan-400 to-blue-500",
      hoverColor: "hover:border-cyan-500/50",
    },
  ];

  return (
    <section id="community" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[180px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Card */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="relative rounded-3xl p-1 bg-gradient-to-br from-primary/50 via-secondary/50 to-neon-cyan/50">
            <div className="rounded-3xl bg-card p-8 md:p-12">
              {/* Header */}
              <div className={`text-center mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary mb-6">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 leading-heading">
                  <span className="text-foreground">{t.community.title1}</span>
                  <span className="text-gradient">{t.community.title2}</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl mx-auto font-body leading-body">
                  {t.community.description}
                </p>
              </div>

              {/* Social Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-10">
                {socials.map((social, index) => (
                  <button
                    key={social.name}
                    className={`group p-6 rounded-xl border border-border/30 bg-muted/30 ${social.hoverColor} transition-all duration-500 hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.color} p-0.5 flex-shrink-0`}>
                        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                          <social.icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <div className="text-start">
                        <p className="font-ui font-semibold text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground font-body">{social.followers} {t.community.members}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Stats */}
              <div className={`grid grid-cols-3 gap-4 p-6 rounded-2xl bg-muted/30 border border-border/30 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {[
                  { value: "259K+", label: t.community.communityMembers },
                  { value: "150+", label: t.community.countries },
                  { value: "24/7", label: t.community.activeChat },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-numbers text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                    <p className="text-sm text-muted-foreground mt-1 font-body">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className={`text-center mt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 neon-glow px-8 py-6 text-lg font-ui font-semibold">
                  {t.community.joinCommunity}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
