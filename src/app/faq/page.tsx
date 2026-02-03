"use client";

import Navbar from "@/components/lucky10/Navbar";
import Footer from "@/components/lucky10/Footer";
import { ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: Record<Language, { title1: string; title2: string; subtitle: string; items: FAQItem[] }> = {
  en: {
    title1: "Frequently Asked ",
    title2: "Questions",
    subtitle: "Find answers to common questions about Lucky10 here",
    items: [
      {
        question: "What is Lucky10?",
        answer: "Lucky10 is an online lottery platform inspired by video games that provides an exciting, transparent, and fair experience for users."
      },
      {
        question: "How can I participate in the draw?",
        answer: "To participate in the draw, first register, then purchase your ticket and wait for the countdown and results announcement."
      },
      {
        question: "How are prizes distributed?",
        answer: "Prizes are distributed in three tiers: Grand Jackpot for the main winner, Big Reward for runners-up, and bonus prizes for lucky participants."
      },
      {
        question: "Are the draws fair?",
        answer: "Yes, all draws are verified using blockchain technology that ensures complete fairness and auditability."
      },
      {
        question: "How can I claim my prize?",
        answer: "After the results are announced, prizes are automatically credited to your account and you can withdraw them."
      },
      {
        question: "What is the minimum age to participate?",
        answer: "The minimum age to participate in the draw is 18 years old."
      }
    ]
  },
  tr: {
    title1: "SÄ±k Sorulan ",
    title2: "Sorular",
    subtitle: "Lucky10 hakkÄ±nda sÄ±k sorulan sorularÄ±n cevaplarÄ±nÄ± burada bulun",
    items: [
      {
        question: "Lucky10 nedir?",
        answer: "Lucky10, video oyunlarÄ±ndan ilham alan, kullanÄ±cÄ±lara heyecan verici, ÅŸeffaf ve adil bir deneyim sunan Ã§evrimiÃ§i bir piyango platformudur."
      },
      {
        question: "Ã‡ekiliÅŸe nasÄ±l katÄ±labilirim?",
        answer: "Ã‡ekiliÅŸe katÄ±lmak iÃ§in Ã¶nce kayÄ±t olun, ardÄ±ndan biletinizi satÄ±n alÄ±n ve geri sayÄ±m ile sonuÃ§larÄ±n aÃ§Ä±klanmasÄ±nÄ± bekleyin."
      },
      {
        question: "Ã–dÃ¼ller nasÄ±l daÄŸÄ±tÄ±lÄ±yor?",
        answer: "Ã–dÃ¼ller Ã¼Ã§ kademede daÄŸÄ±tÄ±lÄ±r: Ana kazanan iÃ§in BÃ¼yÃ¼k Jackpot, ikinciler iÃ§in BÃ¼yÃ¼k Ã–dÃ¼l ve ÅŸanslÄ± katÄ±lÄ±mcÄ±lar iÃ§in bonus Ã¶dÃ¼ller."
      },
      {
        question: "Ã‡ekiliÅŸler adil mi?",
        answer: "Evet, tÃ¼m Ã§ekiliÅŸler tam adaleti ve denetlenebilirliÄŸi saÄŸlayan blockchain teknolojisi kullanÄ±larak doÄŸrulanÄ±r."
      },
      {
        question: "Ã–dÃ¼lÃ¼mÃ¼ nasÄ±l talep edebilirim?",
        answer: "SonuÃ§lar aÃ§Ä±klandÄ±ktan sonra Ã¶dÃ¼ller otomatik olarak hesabÄ±nÄ±za yatÄ±rÄ±lÄ±r ve Ã§ekebilirsiniz."
      },
      {
        question: "KatÄ±lÄ±m iÃ§in minimum yaÅŸ nedir?",
        answer: "Ã‡ekiliÅŸe katÄ±lÄ±m iÃ§in minimum yaÅŸ 18'dir."
      }
    ]
  },
  ku: {
    title1: "Ù¾Ø±Ø³ÛŒØ§Ø±Û• ",
    title2: "Ø¨Ø§ÙˆÛ•Ú©Ø§Ù†",
    subtitle: "ÙˆÛ•ÚµØ§Ù…ÛŒ Ù¾Ø±Ø³ÛŒØ§Ø±Û• Ø¨Ø§ÙˆÛ•Ú©Ø§Ù† Ø¯Û•Ø±Ø¨Ø§Ø±Û•ÛŒ Lucky10 Ù„ÛŽØ±Û• Ø¨Ø¯Û†Ø²Û•ÙˆÛ•",
    items: [
      {
        question: "Lucky10 Ú†ÛŒÛŒÛ•ØŸ",
        answer: "Lucky10 Ù¾Ù„Ø§ØªÙÛ†Ø±Ù…ÛŽÚ©ÛŒ Ù„Û†ØªÛ•Ø±ÛŒ Ø¦Û†Ù†Ù„Ø§ÛŒÙ†Û• Ú©Û• Ù„Û• ÛŒØ§Ø±ÛŒÛŒÛ• Ú¤ÛŒØ¯ÛŒÛ†ÛŒÛŒÛ•Ú©Ø§Ù†Û•ÙˆÛ• Ø¦ÛŒÙ„Ù‡Ø§Ù… ÙˆÛ•Ø±Ú¯Ø±ØªÙˆÙˆÛ• Ùˆ Ø¦Û•Ø²Ù…ÙˆÙˆÙ†ÛŽÚ©ÛŒ Ø³Û•Ø±Ø³ÙˆÚ•Ù‡ÛŽÙ†Û•Ø±ØŒ Ø´Û•ÙØ§Ù Ùˆ Ø¯Ø§Ø¯Ù¾Û•Ø±ÙˆÛ•Ø± Ø¨Û† Ø¨Û•Ú©Ø§Ø±Ù‡ÛŽÙ†Û•Ø±Ø§Ù† Ø¯Ø§Ø¨ÛŒÙ† Ø¯Û•Ú©Ø§Øª."
      },
      {
        question: "Ú†Û†Ù† Ø¯Û•ØªÙˆØ§Ù†Ù… Ù„Û• Ú©ÛŽØ´Ø§Ù†Ø¯Ø§ Ø¨Û•Ø´Ø¯Ø§Ø±ÛŒ Ø¨Ú©Û•Ù…ØŸ",
        answer: "Ø¨Û† Ø¨Û•Ø´Ø¯Ø§Ø±ÛŒÚ©Ø±Ø¯Ù† Ù„Û• Ú©ÛŽØ´Ø§Ù†Ø¯Ø§ØŒ Ø³Û•Ø±Û•ØªØ§ ØªÛ†Ù…Ø§Ø± Ø¨Ú©Û•ØŒ Ù¾Ø§Ø´Ø§Ù† Ø¨Ù„ÛŒØªÛ•Ú©Û•Øª Ø¨Ú©Ú•Û• Ùˆ Ú†Ø§ÙˆÛ•Ú•ÙˆØ§Ù†ÛŒ Ú˜Ù…Ø§Ø±Û•ÛŒ Ú©Û•Ù…Ø¨ÙˆÙˆÙ†Û•ÙˆÛ• Ùˆ Ú•Ø§Ú¯Û•ÛŒØ§Ù†Ø¯Ù†ÛŒ Ø¦Û•Ù†Ø¬Ø§Ù…Û•Ú©Ø§Ù† Ø¨Ú©Û•."
      },
      {
        question: "Ø®Û•ÚµØ§ØªÛ•Ú©Ø§Ù† Ú†Û†Ù† Ø¯Ø§Ø¨Û•Ø´ Ø¯Û•Ú©Ø±ÛŽÙ†ØŸ",
        answer: "Ø®Û•ÚµØ§ØªÛ•Ú©Ø§Ù† Ù„Û• Ø³ÛŽ Ø¦Ø§Ø³ØªØ¯Ø§ Ø¯Ø§Ø¨Û•Ø´ Ø¯Û•Ú©Ø±ÛŽÙ†: Ø¬Û•Ú©Ù¾Û†ØªÛŒ Ú¯Û•ÙˆØ±Û• Ø¨Û† Ø¨Ø±Ø§ÙˆÛ•ÛŒ Ø³Û•Ø±Û•Ú©ÛŒØŒ Ø®Û•ÚµØ§ØªÛŒ Ú¯Û•ÙˆØ±Û• Ø¨Û† Ø¯ÙˆØ§Ú©Û•ÙˆØªÙˆÙˆÛ•Ú©Ø§Ù†ØŒ Ùˆ Ø®Û•ÚµØ§ØªÛŒ Ø¨Û†Ù†Û•Ø³ Ø¨Û† Ø¨Û•Ø´Ø¯Ø§Ø±Ø¨ÙˆÙˆØ§Ù†ÛŒ Ø¨Û•Ø®Û•ÙˆÛ•Ø±."
      },
      {
        question: "Ø¦Ø§ÛŒØ§ Ú©ÛŽØ´Ø§Ù†Û•Ú©Ø§Ù† Ø¯Ø§Ø¯Ù¾Û•Ø±ÙˆÛ•Ø±Ø§Ù†Û•Ù†ØŸ",
        answer: "Ø¨Û•ÚµÛŽØŒ Ù‡Û•Ù…ÙˆÙˆ Ú©ÛŽØ´Ø§Ù†Û•Ú©Ø§Ù† Ø¨Û• ØªÛ•Ú©Ù†Û•Ù„Û†Ú˜ÛŒØ§ÛŒ Ø¨Ù„Û†Ú©Ú†Û•ÛŒÙ† Ù¾Ø´ØªÚ•Ø§Ø³Øª Ø¯Û•Ú©Ø±ÛŽÙ†Û•ÙˆÛ• Ú©Û• Ø¯Ø§Ø¯Ù¾Û•Ø±ÙˆÛ•Ø±ÛŒ ØªÛ•ÙˆØ§Ùˆ Ùˆ ØªÙˆØ§Ù†Ø§ÛŒ Ù¾Ø´Ú©Ù†ÛŒÙ† Ø¯Û•Ø³Û•Ù„Ù…ÛŽÙ†ÛŽØª."
      },
      {
        question: "Ú†Û†Ù† Ø¯Û•ØªÙˆØ§Ù†Ù… Ø®Û•ÚµØ§ØªÛ•Ú©Û•Ù… ÙˆÛ•Ø±Ø¨Ú¯Ø±Ù…ØŸ",
        answer: "Ù¾Ø§Ø´ Ú•Ø§Ú¯Û•ÛŒØ§Ù†Ø¯Ù†ÛŒ Ø¦Û•Ù†Ø¬Ø§Ù…Û•Ú©Ø§Ù†ØŒ Ø®Û•ÚµØ§ØªÛ•Ú©Ø§Ù† Ø¨Û• Ø´ÛŽÙˆÛ•ÛŒ Ø¦Û†ØªÛ†Ù…Ø§ØªÛŒÚ©ÛŒ Ù„Û• Ø­Ø³Ø§Ø¨Û•Ú©Û•Øª Ø¯Ø§Ø¯Û•Ù†Ø±ÛŽÙ† Ùˆ Ø¯Û•ØªÙˆØ§Ù†ÛŒØª Ø¯Û•Ø±ÛŒØ§Ù†Ø¨Ù‡ÛŽÙ†ÛŒØª."
      },
      {
        question: "Ú©Û•Ù…ØªØ±ÛŒÙ† ØªÛ•Ù…Û•Ù† Ø¨Û† Ø¨Û•Ø´Ø¯Ø§Ø±ÛŒÚ©Ø±Ø¯Ù† Ú†Û•Ù†Ø¯Û•ØŸ",
        answer: "Ú©Û•Ù…ØªØ±ÛŒÙ† ØªÛ•Ù…Û•Ù† Ø¨Û† Ø¨Û•Ø´Ø¯Ø§Ø±ÛŒÚ©Ø±Ø¯Ù† Ù„Û• Ú©ÛŽØ´Ø§Ù†Ø¯Ø§ Ù¡Ù¨ Ø³Ø§ÚµÛ•."
      }
    ]
  },
  fa: {
    title1: "Ø³ÙˆØ§Ù„Ø§Øª ",
    title2: "Ù…ØªØ¯Ø§ÙˆÙ„",
    subtitle: "Ù¾Ø§Ø³Ø® Ø³ÙˆØ§Ù„Ø§Øª Ø±Ø§ÛŒØ¬ Ø¯Ø±Ø¨Ø§Ø±Ù‡ Lucky10 Ø±Ø§ Ø¯Ø± Ø§ÛŒÙ†Ø¬Ø§ Ø¨ÛŒØ§Ø¨ÛŒØ¯",
    items: [
      {
        question: "Lucky10 Ú†ÛŒØ³ØªØŸ",
        answer: "Lucky10 ÛŒÚ© Ù¾Ù„ØªÙØ±Ù… Ù„Ø§ØªØ§Ø±ÛŒ Ø¢Ù†Ù„Ø§ÛŒÙ† Ø¨Ø§ Ø§Ù„Ù‡Ø§Ù… Ø§Ø² Ø¨Ø§Ø²ÛŒâ€ŒÙ‡Ø§ÛŒ ÙˆÛŒØ¯ÛŒÙˆÛŒÛŒ Ø§Ø³Øª Ú©Ù‡ ØªØ¬Ø±Ø¨Ù‡â€ŒØ§ÛŒ Ù‡ÛŒØ¬Ø§Ù†â€ŒØ§Ù†Ú¯ÛŒØ²ØŒ Ø´ÙØ§Ù Ùˆ Ù…Ù†ØµÙØ§Ù†Ù‡ Ø±Ø§ Ø¨Ø±Ø§ÛŒ Ú©Ø§Ø±Ø¨Ø±Ø§Ù† ÙØ±Ø§Ù‡Ù… Ù…ÛŒâ€ŒÚ©Ù†Ø¯."
      },
      {
        question: "Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù… Ø¯Ø± Ù‚Ø±Ø¹Ù‡â€ŒÚ©Ø´ÛŒ Ø´Ø±Ú©Øª Ú©Ù†Ù…ØŸ",
        answer: "Ø¨Ø±Ø§ÛŒ Ø´Ø±Ú©Øª Ø¯Ø± Ù‚Ø±Ø¹Ù‡â€ŒÚ©Ø´ÛŒØŒ Ø§Ø¨ØªØ¯Ø§ Ø«Ø¨Øªâ€ŒÙ†Ø§Ù… Ú©Ù†ÛŒØ¯ØŒ Ø³Ù¾Ø³ Ø¨Ù„ÛŒØª Ø®ÙˆØ¯ Ø±Ø§ Ø®Ø±ÛŒØ¯Ø§Ø±ÛŒ Ú©Ù†ÛŒØ¯ Ùˆ Ù…Ù†ØªØ¸Ø± Ø´Ù…Ø§Ø±Ø´ Ù…Ø¹Ú©ÙˆØ³ Ùˆ Ø§Ø¹Ù„Ø§Ù… Ù†ØªØ§ÛŒØ¬ Ø¨Ø§Ø´ÛŒØ¯."
      },
      {
        question: "Ø¬ÙˆØ§ÛŒØ² Ú†Ú¯ÙˆÙ†Ù‡ ØªÙˆØ²ÛŒØ¹ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ØŸ",
        answer: "Ø¬ÙˆØ§ÛŒØ² Ø¯Ø± Ø³Ù‡ Ø³Ø·Ø­ ØªÙˆØ²ÛŒØ¹ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯: Ø¬Ú©Ù¾Ø§Øª Ø¨Ø²Ø±Ú¯ Ø¨Ø±Ø§ÛŒ Ø¨Ø±Ù†Ø¯Ù‡ Ø§ØµÙ„ÛŒØŒ Ø¬Ø§ÛŒØ²Ù‡ Ø¨Ø²Ø±Ú¯ Ø¨Ø±Ø§ÛŒ Ù†ÙØ±Ø§Øª Ø¨Ø¹Ø¯ÛŒØŒ Ùˆ Ø¬ÙˆØ§ÛŒØ² Ù¾Ø§Ø¯Ø§Ø´ÛŒ Ø¨Ø±Ø§ÛŒ Ø´Ø±Ú©Øªâ€ŒÚ©Ù†Ù†Ø¯Ú¯Ø§Ù† Ø®ÙˆØ´â€ŒØ´Ø§Ù†Ø³."
      },
      {
        question: "Ø¢ÛŒØ§ Ù‚Ø±Ø¹Ù‡â€ŒÚ©Ø´ÛŒâ€ŒÙ‡Ø§ Ù…Ù†ØµÙØ§Ù†Ù‡ Ù‡Ø³ØªÙ†Ø¯ØŸ",
        answer: "Ø¨Ù„Ù‡ØŒ ØªÙ…Ø§Ù… Ù‚Ø±Ø¹Ù‡â€ŒÚ©Ø´ÛŒâ€ŒÙ‡Ø§ Ø¨Ø§ Ø§Ø³ØªÙØ§Ø¯Ù‡ Ø§Ø² ÙÙ†Ø§ÙˆØ±ÛŒ Ø¨Ù„Ø§Ú©Ú†ÛŒÙ† ØªØ£ÛŒÛŒØ¯ Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯ Ú©Ù‡ ØªØ¶Ù…ÛŒÙ†â€ŒÚ©Ù†Ù†Ø¯Ù‡ Ø¹Ø¯Ø§Ù„Øª Ú©Ø§Ù…Ù„ Ùˆ Ù‚Ø§Ø¨Ù„ÛŒØª Ø­Ø³Ø§Ø¨Ø±Ø³ÛŒ Ø§Ø³Øª."
      },
      {
        question: "Ú†Ú¯ÙˆÙ†Ù‡ Ù…ÛŒâ€ŒØªÙˆØ§Ù†Ù… Ø¬Ø§ÛŒØ²Ù‡ Ø®ÙˆØ¯ Ø±Ø§ Ø¯Ø±ÛŒØ§ÙØª Ú©Ù†Ù…ØŸ",
        answer: "Ù¾Ø³ Ø§Ø² Ø§Ø¹Ù„Ø§Ù… Ù†ØªØ§ÛŒØ¬ØŒ Ø¬ÙˆØ§ÛŒØ² Ø¨Ù‡ ØµÙˆØ±Øª Ø®ÙˆØ¯Ú©Ø§Ø± Ø¨Ù‡ Ø­Ø³Ø§Ø¨ Ú©Ø§Ø±Ø¨Ø±ÛŒ Ø´Ù…Ø§ ÙˆØ§Ø±ÛŒØ² Ù…ÛŒâ€ŒØ´ÙˆØ¯ Ùˆ Ù…ÛŒâ€ŒØªÙˆØ§Ù†ÛŒØ¯ Ø¢Ù† Ø±Ø§ Ø¨Ø±Ø¯Ø§Ø´Øª Ú©Ù†ÛŒØ¯."
      },
      {
        question: "Ø­Ø¯Ø§Ù‚Ù„ Ø³Ù† Ø¨Ø±Ø§ÛŒ Ø´Ø±Ú©Øª Ø¯Ø± Ù‚Ø±Ø¹Ù‡â€ŒÚ©Ø´ÛŒ Ú†Ù‚Ø¯Ø± Ø§Ø³ØªØŸ",
        answer: "Ø­Ø¯Ø§Ù‚Ù„ Ø³Ù† Ø¨Ø±Ø§ÛŒ Ø´Ø±Ú©Øª Ø¯Ø± Ù‚Ø±Ø¹Ù‡â€ŒÚ©Ø´ÛŒ Û±Û¸ Ø³Ø§Ù„ ØªÙ…Ø§Ù… Ø§Ø³Øª."
      }
    ]
  },
  ar: {
    title1: "Ø§Ù„Ø£Ø³Ø¦Ù„Ø© ",
    title2: "Ø§Ù„Ø´Ø§Ø¦Ø¹Ø©",
    subtitle: "Ø§Ø¹Ø«Ø± Ø¹Ù„Ù‰ Ø¥Ø¬Ø§Ø¨Ø§Øª Ù„Ù„Ø£Ø³Ø¦Ù„Ø© Ø§Ù„Ø´Ø§Ø¦Ø¹Ø© Ø­ÙˆÙ„ Lucky10 Ù‡Ù†Ø§",
    items: [
      {
        question: "Ù…Ø§ Ù‡Ùˆ Lucky10ØŸ",
        answer: "Lucky10 Ù‡ÙŠ Ù…Ù†ØµØ© ÙŠØ§Ù†ØµÙŠØ¨ Ø¹Ø¨Ø± Ø§Ù„Ø¥Ù†ØªØ±Ù†Øª Ù…Ø³ØªÙˆØ­Ø§Ø© Ù…Ù† Ø£Ù„Ø¹Ø§Ø¨ Ø§Ù„ÙÙŠØ¯ÙŠÙˆ ØªÙˆÙØ± ØªØ¬Ø±Ø¨Ø© Ù…Ø«ÙŠØ±Ø© ÙˆØ´ÙØ§ÙØ© ÙˆØ¹Ø§Ø¯Ù„Ø© Ù„Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†."
      },
      {
        question: "ÙƒÙŠÙ ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø§Ù„Ù…Ø´Ø§Ø±ÙƒØ© ÙÙŠ Ø§Ù„Ø³Ø­Ø¨ØŸ",
        answer: "Ù„Ù„Ù…Ø´Ø§Ø±ÙƒØ© ÙÙŠ Ø§Ù„Ø³Ø­Ø¨ØŒ Ù‚Ù… Ø¨Ø§Ù„ØªØ³Ø¬ÙŠÙ„ Ø£ÙˆÙ„Ø§Ù‹ØŒ Ø«Ù… Ø§Ø´ØªØ±Ù ØªØ°ÙƒØ±ØªÙƒ ÙˆØ§Ù†ØªØ¸Ø± Ø§Ù„Ø¹Ø¯ Ø§Ù„ØªÙ†Ø§Ø²Ù„ÙŠ ÙˆØ¥Ø¹Ù„Ø§Ù† Ø§Ù„Ù†ØªØ§Ø¦Ø¬."
      },
      {
        question: "ÙƒÙŠÙ ÙŠØªÙ… ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ø¬ÙˆØ§Ø¦Ø²ØŸ",
        answer: "ÙŠØªÙ… ØªÙˆØ²ÙŠØ¹ Ø§Ù„Ø¬ÙˆØ§Ø¦Ø² Ø¹Ù„Ù‰ Ø«Ù„Ø§Ø« Ù…Ø³ØªÙˆÙŠØ§Øª: Ø§Ù„Ø¬Ø§Ø¦Ø²Ø© Ø§Ù„ÙƒØ¨Ù‰ Ù„Ù„ÙØ§Ø¦Ø² Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØŒ ÙˆØ§Ù„Ø¬Ø§Ø¦Ø²Ø© Ø§Ù„ÙƒØ¨ÙŠØ±Ø© Ù„Ù„ÙˆØµÙØ§Ø¡ØŒ ÙˆØ¬ÙˆØ§Ø¦Ø² Ø¥Ø¶Ø§ÙÙŠØ© Ù„Ù„Ù…Ø´Ø§Ø±ÙƒÙŠÙ† Ø§Ù„Ù…Ø­Ø¸ÙˆØ¸ÙŠÙ†."
      },
      {
        question: "Ù‡Ù„ Ø§Ù„Ø³Ø­ÙˆØ¨Ø§Øª Ø¹Ø§Ø¯Ù„Ø©ØŸ",
        answer: "Ù†Ø¹Ù…ØŒ ÙŠØªÙ… Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø³Ø­ÙˆØ¨Ø§Øª Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù… ØªÙ‚Ù†ÙŠØ© Ø§Ù„Ø¨Ù„ÙˆÙƒØ´ÙŠÙ† Ø§Ù„ØªÙŠ ØªØ¶Ù…Ù† Ø§Ù„Ø¹Ø¯Ø§Ù„Ø© Ø§Ù„ÙƒØ§Ù…Ù„Ø© ÙˆÙ‚Ø§Ø¨Ù„ÙŠØ© Ø§Ù„ØªØ¯Ù‚ÙŠÙ‚."
      },
      {
        question: "ÙƒÙŠÙ ÙŠÙ…ÙƒÙ†Ù†ÙŠ Ø§Ù„Ù…Ø·Ø§Ù„Ø¨Ø© Ø¨Ø¬Ø§Ø¦Ø²ØªÙŠØŸ",
        answer: "Ø¨Ø¹Ø¯ Ø¥ÙØ¹Ù„Ø§Ù† Ø§Ù„Ù†ØªØ§Ø¦Ø¬ØŒ ÙŠØªÙ… Ø¥ÙŠØ¯Ø§Ø¹ Ø§Ù„Ø¬ÙˆØ§Ø¦Ø² ØªÙ„Ù‚Ø§Ø¦ÙŠØ§Ù‹ ÙÙŠ Ø­Ø³Ø§Ø¨Ùƒ ÙˆÙŠÙ…ÙƒÙ†Ùƒ Ø³Ø­Ø¨Ù‡Ø§."
      },
      {
        question: "Ù…Ø§ Ù‡Ùˆ Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù„Ù„Ø³Ù† Ù„Ù„Ù…Ø´Ø§Ø±ÙƒØ©ØŸ",
        answer: "Ø§Ù„Ø­Ø¯ Ø§Ù„Ø£Ø¯Ù†Ù‰ Ù„Ù„Ø³Ø­Ù† Ù„Ù„Ù…Ø´Ø§Ø±ÙƒØ© ÙÙŠ Ø§Ù„Ø³Ø­Ø¨ Ù‡Ùˆ 18 Ø¹Ø§Ù…Ø§Ù‹."
      }
    ]
  }
};

const FAQAccordion = ({ item, isOpen, onClick, isRTL }: { item: FAQItem; isOpen: boolean; onClick: () => void; isRTL: boolean }) => {
  return (
    <div className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm">
      <button
        onClick={onClick}
        className={`w-full px-6 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors ${isRTL ? 'text-right' : 'text-left'}`}
      >
        {isRTL ? (
          <>
            <ChevronDown 
              className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
            <span className="font-heading font-semibold text-foreground text-lg">{item.question}</span>
          </>
        ) : (
          <>
            <span className="font-heading font-semibold text-foreground text-lg">{item.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
            />
          </>
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className={`px-6 pb-5 text-muted-foreground font-body leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, isRTL } = useLanguage();
  const content = faqData[language];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/">
              {isRTL ? (
                <>
                  <span>{language === 'fa' ? 'Ø¨Ø§Ø²Ú¯Ø´Øª Ø¨Ù‡ ØµÙØ­Ù‡ Ø§ØµÙ„ÛŒ' : language === 'ar' ? 'Ø§Ù„Ø¹ÙˆØ¯Ø© Ù„Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©' : language === 'ku' ? 'Ú¯Û•Ú•Ø§Ù†Û•ÙˆÛ• Ø¨Û† Ù¾Û•Ú•Û•ÛŒ Ø³Û•Ø±Û•Ú©ÛŒ' : language === 'tr' ? 'Ana Sayfaya DÃ¶n' : 'Back to Home'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </>
              )}
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">{content.title1}</span>
            <span className="text-gradient">{content.title2}</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {content.items.map((item, index) => (
            <FAQAccordion
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              isRTL={isRTL}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
