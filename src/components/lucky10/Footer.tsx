"use client";

import { Zap, Twitter, Send, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { SUPPORT_TELEGRAM_URL } from "@/lib/links";

const Footer = () => {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { name: t.footer.howItWorks, href: "#how-it-works" },
      { name: t.footer.rewards, href: "#rewards" },
      { name: t.footer.winnersLink, href: "#winners" },
    ],
    resources: [
      { name: t.footer.documentation, href: "#" },
      { name: t.footer.faq, href: "/faq" },
      { name: t.footer.support, href: SUPPORT_TELEGRAM_URL },
    ],
    legal: [
      { name: t.footer.privacy, href: "/privacy" },
      { name: t.footer.terms, href: "/terms" },
    ],
  };

  const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Send, href: SUPPORT_TELEGRAM_URL, label: "Telegram" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="relative border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Zap className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span className="font-heading text-2xl font-bold text-gradient">Lucky10</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 font-body leading-body">
              {t.footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-lg border border-border/50 bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t.footer.product}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t.footer.resources}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t.footer.legal}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors font-body">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-body">
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-body">
            <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
            <span>{t.footer.operational}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
