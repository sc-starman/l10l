"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";

export type Language = "en" | "tr" | "ku" | "fa" | "ar";

interface Translations {
  navbar: {
    enterJackpot: string;
    prizes: string;
    features: string;
    winners: string;
    howItWorks: string;
  };
  hero: {
    liveJackpot: string;
    headline1: string;
    headline2: string;
    subheading: string;
    enterNow: string;
    nextDraw: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    currentJackpot: string;
    totalPrizes: string;
    players: string;
    winners: string;
  };
  rewards: {
    title1: string;
    title2: string;
    description: string;
    grandJackpot: string;
    grandDesc: string;
    bigReward: string;
    bigDesc: string;
    luckyWinner: string;
    luckyDesc: string;
    currentPool: string;
  };
  features: {
    title1: string;
    title2: string;
    description: string;
    noKyc: string;
    noKycDesc: string;
    telegramApp: string;
    telegramAppDesc: string;
    cryptoSmartContract: string;
    cryptoSmartContractDesc: string;
  };
  winners: {
    realPayouts: string;
    title1: string;
    title2: string;
    description: string;
    viewAll: string;
    hoursAgo: string;
    dayAgo: string;
  };
  howItWorks: {
    title1: string;
    title2: string;
    description: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    step4: string;
    step4Desc: string;
    startPlaying: string;
  };
  community: {
    title1: string;
    title2: string;
    description: string;
    members: string;
    communityMembers: string;
    countries: string;
    activeChat: string;
    joinCommunity: string;
  };
  footer: {
    description: string;
    product: string;
    resources: string;
    legal: string;
    howItWorks: string;
    rewards: string;
    winnersLink: string;
    communityLink: string;
    documentation: string;
    faq: string;
    support: string;
    blog: string;
    privacy: string;
    terms: string;
    cookies: string;
    copyright: string;
    operational: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    navbar: { 
      enterJackpot: "Enter Jackpot",
      prizes: "Prizes",
      features: "Features",
      winners: "Winners",
      howItWorks: "How It Works",
    },
    hero: {
      liveJackpot: "Live Jackpot Active",
      headline1: "Feel The Game.",
      headline2: "Win The Jackpot",
      subheading: "Enter the arena where luck meets excitement. Real-time draws, massive rewards, and a thrilling gaming experience await.",
      enterNow: "Enter The Jackpot Now",
      nextDraw: "Next Draw In",
      days: "DAYS",
      hours: "HRS",
      minutes: "MIN",
      seconds: "SEC",
      currentJackpot: "Current Jackpot Pool",
      totalPrizes: "Total Prizes",
      players: "Players",
      winners: "Winners",
    },
    rewards: {
      title1: "Game ",
      title2: "Prizes",
      description: "Every draw distributes rewards across two exciting tiers. The bigger the pool, the bigger the wins.",
      grandJackpot: "Grand Jackpot Winner",
      grandDesc: "The ultimate prize for the luckiest player — 60% of the pool",
      bigReward: "Big Reward Winner",
      bigDesc: "Second-tier rewards for runners-up",
      luckyWinner: "Airdrop to Lucky Participants",
      luckyDesc: "30% of the pool is airdropped to 3% of participants",
      currentPool: "Current Jackpot Pool:",
    },
    features: {
      title1: "Why Lucky10 ",
      title2: "Feels Like a Game",
      description: "We've reimagined the lottery experience to be exciting, transparent, and player-focused.",
      noKyc: "No KYC Required",
      noKycDesc: "Play instantly without identity verification. Your privacy is protected — no personal documents needed.",
      telegramApp: "Telegram Mini App",
      telegramAppDesc: "Access Lucky10 directly from Telegram. Buy tickets, check results, and claim rewards in seconds.",
      cryptoSmartContract: "Crypto & Smart Contract",
      cryptoSmartContractDesc: "Buy tickets with crypto on TON network. Draws run on transparent smart contracts — fully verifiable and trustless.",
    },
    winners: {
      realPayouts: "Real Payouts",
      title1: "Real Players. ",
      title2: "Real Wins.",
      description: "Join thousands of winners who've already claimed their rewards.",
      viewAll: "View All Winners →",
      hoursAgo: "hours ago",
      dayAgo: "day ago",
    },
    howItWorks: {
      title1: "How It ",
      title2: "Works",
      description: "Getting started is simple. Four steps to your potential jackpot win.",
      step1: "Choose Game",
      step1Desc: "Select from various lottery games with different prize pools and odds.",
      step2: "Buy Ticket",
      step2Desc: "Purchase your ticket securely. Each ticket is your entry to win big.",
      step3: "Wait for Countdown",
      step3Desc: "Watch the excitement build as the timer counts down to the draw.",
      step4: "Draw & Win",
      step4Desc: "Winners are announced instantly. Claim your rewards immediately!",
      startPlaying: "Start Playing Now",
    },
    community: {
      title1: "Join the ",
      title2: "Lucky Players",
      description: "Connect with thousands of risk-takers worldwide. Share strategies, celebrate wins, and be part of the excitement.",
      members: "members",
      communityMembers: "Community Members",
      countries: "Countries",
      activeChat: "Active Chat",
      joinCommunity: "Join Our Community",
    },
    footer: {
      description: "The ultimate gaming-inspired lottery experience. Feel the thrill, chase the jackpot, and join the winners circle.",
      product: "Product",
      resources: "Resources",
      legal: "Legal",
      howItWorks: "How It Works",
      rewards: "Rewards",
      winnersLink: "Winners",
      communityLink: "Community",
      documentation: "Documentation",
      faq: "FAQ",
      support: "Support",
      blog: "Blog",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy",
      copyright: "© 2025 Lucky10. All rights reserved.",
      operational: "All systems operational",
    },
  },
  tr: {
    navbar: { 
      enterJackpot: "Jackpot'a Katıl",
      prizes: "Ödüller",
      features: "Özellikler",
      winners: "Kazananlar",
      howItWorks: "Nasıl Çalışır",
    },
    hero: {
      liveJackpot: "Canlı Jackpot Aktif",
      headline1: "Oyunu Hisset.",
      headline2: "Jackpot'u Kazan",
      subheading: "Şansın heyecanla buluştuğu arenaya gir. Gerçek zamanlı çekilişler, büyük ödüller ve heyecan verici oyun deneyimi seni bekliyor.",
      enterNow: "Şimdi Jackpot'a Katıl",
      nextDraw: "Sonraki Çekilişe",
      days: "GÜN",
      hours: "SAAT",
      minutes: "DAK",
      seconds: "SAN",
      currentJackpot: "Mevcut Jackpot Havuzu",
      totalPrizes: "Toplam Ödüller",
      players: "Oyuncular",
      winners: "Kazananlar",
    },
    rewards: {
      title1: "Oyun ",
      title2: "Ödülleri",
      description: "Her çekiliş ödülleri iki heyecan verici katmana dağıtır. Havuz ne kadar büyükse, kazançlar o kadar büyük.",
      grandJackpot: "Büyük Jackpot Kazananı",
      grandDesc: "En şanslı oyuncu için nihai ödül — havuzun 60%'ı",
      bigReward: "Büyük Ödül Kazananı",
      bigDesc: "İkinciler için ikinci kademe ödüller",
      luckyWinner: "Şanslı Katılımcılara Airdrop",
      luckyDesc: "Havuzun 30%'ı katılımcıların 3%'üne airdrop edilir",
      currentPool: "Mevcut Jackpot Havuzu:",
    },
    features: {
      title1: "Neden Lucky10 ",
      title2: "Bir Oyun Gibi Hissettiriyor",
      description: "Piyango deneyimini heyecan verici, şeffaf ve oyuncu odaklı olarak yeniden tasarladık.",
      noKyc: "KYC Gerekmez",
      noKycDesc: "Kimlik doğrulaması olmadan anında oyna. Gizliliğin korunur — kişisel belge gerekmez.",
      telegramApp: "Telegram Mini Uygulaması",
      telegramAppDesc: "Lucky10'a doğrudan Telegram'dan eriş. Bilet al, sonuçları kontrol et ve ödülleri saniyeler içinde al.",
      cryptoSmartContract: "Kripto ve Akıllı Sözleşme",
      cryptoSmartContractDesc: "TON ağında kripto ile bilet al. Çekilişler şeffaf akıllı sözleşmelerde çalışır — tamamen doğrulanabilir.",
    },
    winners: {
      realPayouts: "Gerçek Ödemeler",
      title1: "Gerçek Oyuncular. ",
      title2: "Gerçek Kazançlar.",
      description: "Ödüllerini çoktan alan binlerce kazanana katıl.",
      viewAll: "Tüm Kazananları Gör →",
      hoursAgo: "saat önce",
      dayAgo: "gün önce",
    },
    howItWorks: {
      title1: "Nasıl ",
      title2: "Çalışır",
      description: "Başlamak basit. Potansiyel jackpot kazancına dört adım.",
      step1: "Oyun Seç",
      step1Desc: "Farklı ödül havuzları ve oranlarla çeşitli piyango oyunlarından seç.",
      step2: "Bilet Al",
      step2Desc: "Biletini güvenle satın al. Her bilet büyük kazanma girişin.",
      step3: "Geri Sayımı Bekle",
      step3Desc: "Zamanlayıcı çekilişe doğru sayarken heyecanın yükselmesini izle.",
      step4: "Çekiliş ve Kazan",
      step4Desc: "Kazananlar anında açıklanır. Ödüllerini hemen al!",
      startPlaying: "Şimdi Oynamaya Başla",
    },
    community: {
      title1: "Katıl ",
      title2: "Şanslı Oyunculara",
      description: "Dünya çapında binlerce risk alanla bağlan. Stratejileri paylaş, kazançları kutla ve heyecanın parçası ol.",
      members: "üye",
      communityMembers: "Topluluk Üyeleri",
      countries: "Ülkeler",
      activeChat: "Aktif Sohbet",
      joinCommunity: "Topluluğumuza Katıl",
    },
    footer: {
      description: "Nihai oyun ilhamlı piyango deneyimi. Heyecanı hisset, jackpot'un peşinden git ve kazananlar çemberine katıl.",
      product: "Ürün",
      resources: "Kaynaklar",
      legal: "Yasal",
      howItWorks: "Nasıl Çalışır",
      rewards: "Ödüller",
      winnersLink: "Kazananlar",
      communityLink: "Topluluk",
      documentation: "Dokümantasyon",
      faq: "SSS",
      support: "Destek",
      blog: "Blog",
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Şartları",
      cookies: "Çerez Politikası",
      copyright: "© 2025 Lucky10. Tüm hakları saklıdır.",
      operational: "Tüm sistemler çalışıyor",
    },
  },
  ku: {
    navbar: { 
      enterJackpot: "داخلی جەکپۆت",
      prizes: "خەڵاتەکان",
      features: "تایبەتمەندییەکان",
      winners: "براوەکان",
      howItWorks: "چۆن کاردەکات",
    },
    hero: {
      liveJackpot: "جەکپۆتی ڕاستەوخۆ چالاکە",
      headline1: "یاریەکە ھەست پێبکە.",
      headline2: "جەکپۆتەکە ببەرەوە",
      subheading: "بچۆ ناو ئارینایەکە کە بەختەوەری لەگەڵ سەرسوڕمان دەکەوێتەوە. کێشانی ڕاستەوخۆ، خەڵاتی گەورە، و ئەزموونی یاری سەرسوڕھێنەر چاوەڕوانتن.",
      enterNow: "ئێستا داخلی جەکپۆت ببە",
      nextDraw: "کێشانی داھاتوو لە",
      days: "ڕۆژ",
      hours: "کاتژ",
      minutes: "خولەک",
      seconds: "چرکە",
      currentJackpot: "حەوزی جەکپۆتی ئێستا",
      totalPrizes: "کۆی خەڵاتەکان",
      players: "یاریزانەکان",
      winners: "بردنەوەکان",
    },
    rewards: {
      title1: "خەڵاتی ",
      title2: "یاری",
      description: "ھەر کێشانێک خەڵاتەکان بۆ دوو ئاستی سەرسوڕھێنەر دابەش دەکات. ھەرچەندە حەوزەکە گەورەتر بێت، بردنەوەکان گەورەترن.",
      grandJackpot: "براوەی جەکپۆتی گەورە",
      grandDesc: "خەڵاتی کۆتایی بۆ بەختەوەرترین یاریزان — 60% ی حەوز",
      bigReward: "براوەی خەڵاتی گەورە",
      bigDesc: "خەڵاتی ئاستی دووەم بۆ دواکەوتووەکان",
      luckyWinner: "ئەیردراپ بۆ بەشداربووانی بەختەوەر",
      luckyDesc: "30% ی حەوز بۆ 3% ی بەشداربووان ئەیردراپ دەکرێت",
      currentPool: "حەوزی جەکپۆتی ئێستا:",
    },
    features: {
      title1: "بۆچی Lucky10 ",
      title2: "وەک یاریەک ھەست پێدەکرێت",
      description: "ئەزموونی لۆتەری بۆ سەرسوڕھێنەر و شەفاف و یاریزان ناوەندی دووبارە داڕێژینمان.",
      noKyc: "بەبێ KYC",
      noKycDesc: "فەورا یاری بکە بەبێ پشتڕاستکردنەوەی ناسنامە. تایبەتمەندیت پارێزراوە — بەڵگەنامەی کەسی پێویست نییە.",
      telegramApp: "ئەپی تێلێگرام",
      telegramAppDesc: "دەستگەیشتن بە Lucky10 ڕاستەوخۆ لە تێلێگرام. بلیت بکڕە، ئەنجامەکان بپشکنە و خەڵاتەکان لە چەند چرکەدا وەربگرە.",
      cryptoSmartContract: "کریپتۆ و سمارت کۆنتراکت",
      cryptoSmartContractDesc: "بلیت بکڕە بە کریپتۆ لە تۆڕی TON. کێشانەکان لەسەر سمارت کۆنتراکتی شەفاف دەڕۆن — تەواو پشتڕاستکراوە.",
    },
    winners: {
      realPayouts: "پارەدانی ڕاستەقینە",
      title1: "یاریزانی ڕاستەقینە. ",
      title2: "بردنەوەی ڕاستەقینە.",
      description: "پەیوەست ببە بە ھەزاران براوەی کە خەڵاتەکانیان داوەتەوە.",
      viewAll: "ھەموو براوەکان ببینە →",
      hoursAgo: "کاتژمێر لەمەوپێش",
      dayAgo: "ڕۆژ لەمەوپێش",
    },
    howItWorks: {
      title1: "چۆن ",
      title2: "کاردەکات",
      description: "دەستپێکردن سادەیە. چوار ھەنگاو بۆ بردنەوەی جەکپۆتی ئەگەری.",
      step1: "یاری ھەڵبژێرە",
      step1Desc: "لە یارییە لۆتەرییە جۆراوجۆرەکان ھەڵبژێرە بە حەوز و ڕێژەی جیاواز.",
      step2: "بلیت بکڕە",
      step2Desc: "بلیتەکەت بە ئارامی بکڕە. ھەر بلیتێک چوونەژوورەوەتە بۆ بردنەوەی گەورە.",
      step3: "چاوەڕوانی ژمێری ھەڵگەڕانەوە بکە",
      step3Desc: "تەماشای سەرسوڕمان بەرز بووەتەوە بکە کاتێک ژمێر دەژمێرێتەوە بۆ کێشان.",
      step4: "کێشان و بردنەوە",
      step4Desc: "براوەکان فەورا ڕادەگەیەنرێن. خەڵاتەکانت فەورا وەربگرە!",
      startPlaying: "ئێستا دەست بکە بە یاریکردن",
    },
    community: {
      title1: "پەیوەست ببە بە ",
      title2: "یاریزانە بەختەوەرەکان",
      description: "پەیوەندی بکە لەگەڵ ھەزاران ڕیسک وەرگر لە جیھاندا. ستراتیژییەکان ھاوبەش بکە، بردنەوەکان پیرۆز بکە، و ببە بەشێک لە سەرسوڕمان.",
      members: "ئەندام",
      communityMembers: "ئەندامانی کۆمەڵگا",
      countries: "وڵاتەکان",
      activeChat: "چاتی چالاک",
      joinCommunity: "بچۆ ناو کۆمەڵگاکەمان",
    },
    footer: {
      description: "ئەزموونی لۆتەریی یاری ئیلھامی کۆتایی. سەرسوڕمان ھەست پێبکە، بەدوای جەکپۆتدا بچۆ، و پەیوەست ببە بە بازنەی براوەکان.",
      product: "بەرھەم",
      resources: "سەرچاوەکان",
      legal: "یاسایی",
      howItWorks: "چۆن کاردەکات",
      rewards: "خەڵاتەکان",
      winnersLink: "براوەکان",
      communityLink: "کۆمەڵگا",
      documentation: "بەڵگەنامە",
      faq: "پرسیارە باوەکان",
      support: "پشتگیری",
      blog: "بلۆگ",
      privacy: "سیاسەتی تایبەتمەندی",
      terms: "مەرجەکانی خزمەتگوزاری",
      cookies: "سیاسەتی کوکی",
      copyright: "© 2025 Lucky10. ھەموو مافەکان پارێزراون.",
      operational: "ھەموو سیستەمەکان کاردەکەن",
    },
  },
  fa: {
    navbar: { 
      enterJackpot: "ورود به جکپات",
      prizes: "جوایز",
      features: "ویژگی‌ها",
      winners: "برندگان",
      howItWorks: "نحوه کار",
    },
    hero: {
      liveJackpot: "جکپات زنده فعال است",
      headline1: "بازی را احساس کن.",
      headline2: "جکپات را ببر",
      subheading: "وارد میدانی شو که شانس با هیجان ملاقات می‌کند. قرعه‌کشی‌های زنده، جوایز بزرگ و تجربه‌ای هیجان‌انگیز در انتظار تو است.",
      enterNow: "همین الان وارد جکپات شو",
      nextDraw: "قرعه‌کشی بعدی در",
      days: "روز",
      hours: "ساعت",
      minutes: "دقیقه",
      seconds: "ثانیه",
      currentJackpot: "استخر جکپات فعلی",
      totalPrizes: "مجموع جوایز",
      players: "بازیکنان",
      winners: "برندگان",
    },
    rewards: {
      title1: "جوایز ",
      title2: "بازی",
      description: "هر قرعه‌کشی جوایز را در دو سطح هیجان‌انگیز توزیع می‌کند. هرچه استخر بزرگتر، بردها بزرگتر.",
      grandJackpot: "برنده جکپات بزرگ",
      grandDesc: "جایزه نهایی برای خوش‌شانس‌ترین بازیکن — 60% استخر",
      bigReward: "برنده جایزه بزرگ",
      bigDesc: "جوایز سطح دوم برای نفرات بعدی",
      luckyWinner: "ایردراپ به شرکت‌کنندگان خوش‌شانس",
      luckyDesc: "30% استخر به 3% شرکت‌کنندگان ایردراپ می‌شود",
      currentPool: "استخر فعلی جکپات:",
    },
    features: {
      title1: "چرا Lucky10 ",
      title2: "احساس بازی می‌دهد",
      description: "ما تجربه لاتاری را هیجان‌انگیز، شفاف و بازیکن‌محور بازطراحی کردیم.",
      noKyc: "بدون احراز هویت",
      noKycDesc: "بدون نیاز به احراز هویت فوراً بازی کن. حریم خصوصی‌ات محفوظ است — نیازی به مدارک شخصی نیست.",
      telegramApp: "اپ تلگرام",
      telegramAppDesc: "مستقیماً از تلگرام به Lucky10 دسترسی داشته باش. بلیط بخر، نتایج را چک کن و جوایز را در چند ثانیه دریافت کن.",
      cryptoSmartContract: "کریپتو و اسمارت کانترکت",
      cryptoSmartContractDesc: "با کریپتو روی شبکه TON بلیط بخر. قرعه‌کشی‌ها روی اسمارت کانترکت شفاف اجرا می‌شوند — کاملاً قابل تأیید.",
    },
    winners: {
      realPayouts: "پرداخت‌های واقعی",
      title1: "بازیکنان واقعی. ",
      title2: "بردهای واقعی.",
      description: "به هزاران برنده بپیوند که قبلاً جوایزشان را دریافت کرده‌اند.",
      viewAll: "مشاهده همه برندگان ←",
      hoursAgo: "ساعت پیش",
      dayAgo: "روز پیش",
    },
    howItWorks: {
      title1: "چگونه ",
      title2: "کار می‌کند",
      description: "شروع کردن ساده است. چهار قدم تا برد احتمالی جکپات.",
      step1: "بازی انتخاب کن",
      step1Desc: "از بازی‌های لاتاری مختلف با استخرهای جایزه و شانس‌های متفاوت انتخاب کن.",
      step2: "بلیط بخر",
      step2Desc: "بلیطت را با امنیت بخر. هر بلیط ورود تو به بردن بزرگ است.",
      step3: "منتظر شمارش معکوس باش",
      step3Desc: "تماشا کن هیجان بالا می‌رود وقتی تایمر به سمت قرعه‌کشی می‌شمارد.",
      step4: "قرعه‌کشی و برد",
      step4Desc: "برندگان فوراً اعلام می‌شوند. جوایزت را فوراً دریافت کن!",
      startPlaying: "همین الان شروع به بازی کن",
    },
    community: {
      title1: "به ",
      title2: "بازیکنان خوش‌شانس بپیوند",
      description: "با هزاران ریسک‌پذیر در سراسر جهان ارتباط برقرار کن. استراتژی‌ها را به اشتراک بگذار، بردها را جشن بگیر و بخشی از هیجان باش.",
      members: "عضو",
      communityMembers: "اعضای جامعه",
      countries: "کشورها",
      activeChat: "چت فعال",
      joinCommunity: "به جامعه ما بپیوند",
    },
    footer: {
      description: "تجربه لاتاری الهام‌گرفته از بازی نهایی. هیجان را احساس کن، دنبال جکپات برو و به حلقه برندگان بپیوند.",
      product: "محصول",
      resources: "منابع",
      legal: "قانونی",
      howItWorks: "چگونه کار می‌کند",
      rewards: "جوایز",
      winnersLink: "برندگان",
      communityLink: "جامعه",
      documentation: "مستندات",
      faq: "سؤالات متداول",
      support: "پشتیبانی",
      blog: "وبلاگ",
      privacy: "سیاست حفظ حریم خصوصی",
      terms: "شرایط خدمات",
      cookies: "سیاست کوکی",
      copyright: "© 2025 Lucky10. تمام حقوق محفوظ است.",
      operational: "همه سیستم‌ها فعال هستند",
    },
  },
  ar: {
    navbar: { 
      enterJackpot: "ادخل الجاكبوت",
      prizes: "الجوائز",
      features: "المميزات",
      winners: "الفائزون",
      howItWorks: "كيف يعمل",
    },
    hero: {
      liveJackpot: "الجاكبوت المباشر نشط",
      headline1: "اشعر باللعبة.",
      headline2: "اربح الجاكبوت",
      subheading: "ادخل الساحة حيث يلتقي الحظ بالإثارة. سحوبات مباشرة، جوائز ضخمة، وتجربة لعب مثيرة في انتظارك.",
      enterNow: "ادخل الجاكبوت الآن",
      nextDraw: "السحب القادم في",
      days: "يوم",
      hours: "ساعة",
      minutes: "دقيقة",
      seconds: "ثانية",
      currentJackpot: "حوض الجاكبوت الحالي",
      totalPrizes: "إجمالي الجوائز",
      players: "اللاعبون",
      winners: "الفائزون",
    },
    rewards: {
      title1: "جوائز ",
      title2: "اللعبة",
      description: "كل سحب يوزع الجوائز عبر مستويين مثيرين. كلما كان الحوض أكبر، كانت الأرباح أكبر.",
      grandJackpot: "فائز الجاكبوت الكبير",
      grandDesc: "الجائزة النهائية لأحظى لاعب — 60% من الحوض",
      bigReward: "فائز الجائزة الكبرى",
      bigDesc: "جوائز المستوى الثاني للوصفاء",
      luckyWinner: "إيردروب للمشاركين المحظوظين",
      luckyDesc: "30% من الحوض يُوزع على 3% من المشاركين",
      currentPool: "حوض الجاكبوت الحالي:",
    },
    features: {
      title1: "لماذا Lucky10 ",
      title2: "تشعر كلعبة",
      description: "أعدنا تصور تجربة اليانصيب لتكون مثيرة وشفافة ومركزة على اللاعب.",
      noKyc: "بدون KYC",
      noKycDesc: "العب فوراً بدون التحقق من الهوية. خصوصيتك محمية — لا حاجة للوثائق الشخصية.",
      telegramApp: "تطبيق تيليجرام",
      telegramAppDesc: "الوصول إلى Lucky10 مباشرة من تيليجرام. اشترِ التذاكر، تحقق من النتائج واستلم الجوائز في ثوانٍ.",
      cryptoSmartContract: "كريبتو وعقد ذكي",
      cryptoSmartContractDesc: "اشترِ التذاكر بالكريبتو على شبكة TON. السحوبات تعمل على عقود ذكية شفافة — قابلة للتحقق بالكامل.",
    },
    winners: {
      realPayouts: "دفعات حقيقية",
      title1: "لاعبون حقيقيون. ",
      title2: "أرباح حقيقية.",
      description: "انضم إلى آلاف الفائزين الذين استلموا جوائزهم بالفعل.",
      viewAll: "عرض جميع الفائزين ←",
      hoursAgo: "ساعات مضت",
      dayAgo: "يوم مضى",
    },
    howItWorks: {
      title1: "كيف ",
      title2: "يعمل",
      description: "البدء بسيط. أربع خطوات للفوز المحتمل بالجاكبوت.",
      step1: "اختر اللعبة",
      step1Desc: "اختر من ألعاب يانصيب متنوعة بحواجز جوائز واحتمالات مختلفة.",
      step2: "اشترِ تذكرة",
      step2Desc: "اشترِ تذكرتك بأمان. كل تذكرة هي فرصتك للفوز الكبير.",
      step3: "انتظر العد التنازلي",
      step3Desc: "شاهد الإثارة تتصاعد بينما يعد المؤقت نحو السحب.",
      step4: "السحب والفوز",
      step4Desc: "يُعلن الفائزون فوراً. استلم جوائزك على الفور!",
      startPlaying: "ابدأ اللعب الآن",
    },
    community: {
      title1: "انضم إلى ",
      title2: "اللاعبين المحظوظين",
      description: "تواصل مع آلاف المخاطرين حول العالم. شارك الاستراتيجيات، احتفل بالأرباح، وكن جزءاً من الإثارة.",
      members: "عضو",
      communityMembers: "أعضاء المجتمع",
      countries: "دول",
      activeChat: "دردشة نشطة",
      joinCommunity: "انضم إلى مجتمعنا",
    },
    footer: {
      description: "تجربة اليانصيب المستوحاة من الألعاب النهائية. اشعر بالإثارة، طارد الجاكبوت، وانضم إلى دائرة الفائزين.",
      product: "المنتج",
      resources: "الموارد",
      legal: "قانوني",
      howItWorks: "كيف يعمل",
      rewards: "الجوائز",
      winnersLink: "الفائزون",
      communityLink: "المجتمع",
      documentation: "التوثيق",
      faq: "الأسئلة الشائعة",
      support: "الدعم",
      blog: "المدونة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "سياسة الكوكيز",
      copyright: "© 2025 Lucky10. جميع الحقوق محفوظة.",
      operational: "جميع الأنظمة تعمل",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  const isRTL = ["fa", "ar", "ku"].includes(language);

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("lucky10-language", lang);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lucky10-language") as Language | null;
    if (saved && saved !== language) {
      setLanguage(saved);
    }
  }, [language]);

  // Apply language data attribute for CSS font switching
  useEffect(() => {
    document.documentElement.setAttribute('data-lang', language);
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
        isRTL,
      }}
    >
      <div dir={isRTL ? "rtl" : "ltr"} className="font-body">{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "tr" as Language, name: "Türkçe", flag: "🇹🇷" },
  { code: "ku" as Language, name: "کوردی", flag: "🟢" },
  { code: "fa" as Language, name: "فارسی", flag: "🇮🇷" },
  { code: "ar" as Language, name: "العربية", flag: "🇸🇦" },
];
