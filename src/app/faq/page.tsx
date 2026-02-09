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
        answer: "Lucky10 is an online lottery platform inspired by video games that provides an exciting, transparent, and fair experience for users.",
      },
      {
        question: "How can I participate in the draw?",
        answer: "To participate in the draw, first register, then purchase your ticket and wait for the countdown and results announcement.",
      },
      {
        question: "How are prizes distributed?",
        answer: "Prizes are distributed in three tiers: Grand Jackpot for the main winner, Big Reward for runners-up, and bonus prizes for lucky participants.",
      },
      {
        question: "Are the draws fair?",
        answer: "Yes, all draws are verified using blockchain technology that ensures complete fairness and auditability.",
      },
      {
        question: "How can I claim my prize?",
        answer: "After the results are announced, prizes are automatically credited to your account and you can withdraw them.",
      },
      {
        question: "What is the minimum age to participate?",
        answer: "The minimum age to participate in the draw is 18 years old.",
      },
    ],
  },
  tr: {
    title1: "Sık Sorulan ",
    title2: "Sorular",
    subtitle: "Lucky10 hakkında sık sorulan soruların cevaplarını burada bulun",
    items: [
      {
        question: "Lucky10 nedir?",
        answer: "Lucky10, video oyunlarından ilham alan, kullanıcılara heyecan verici, şeffaf ve adil bir deneyim sunan çevrimiçi bir piyango platformudur.",
      },
      {
        question: "Çekilişe nasıl katılabilirim?",
        answer: "Çekilişe katılmak için önce kayıt olun, ardından biletinizi satın alın ve geri sayım ile sonuçların açıklanmasını bekleyin.",
      },
      {
        question: "Ödüller nasıl dağıtılıyor?",
        answer: "Ödüller üç kademede dağıtılır: Ana kazanan için Büyük Jackpot, ikinciler için Büyük Ödül ve şanslı katılımcılar için bonus ödüller.",
      },
      {
        question: "Çekilişler adil mi?",
        answer: "Evet, tüm çekilişler tam adaleti ve denetlenebilirliği sağlayan blockchain teknolojisi kullanılarak doğrulanır.",
      },
      {
        question: "Ödülümü nasıl talep edebilirim?",
        answer: "Sonuçlar açıklandıktan sonra ödüller otomatik olarak hesabınıza yatırılır ve çekebilirsiniz.",
      },
      {
        question: "Katılım için minimum yaş nedir?",
        answer: "Çekilişe katılım için minimum yaş 18'dir.",
      },
    ],
  },
  ku: {
    title1: "پرسیارە ",
    title2: "باوەکان",
    subtitle: "وەڵامی پرسیارە باوەکان دەربارەی Lucky10 لێرە بدۆزەوە",
    items: [
      {
        question: "Lucky10 چییە؟",
        answer: "Lucky10 پلاتفۆرمێکی لۆتەری ئۆنلاینە کە لە یارییە ڤیدیۆییەکانەوە ئیلهام وەرگرتووە و ئەزموونێکی سەرسوڕهێنەر، شەفاف و دادپەروەر بۆ بەکارهێنەران دابین دەکات.",
      },
      {
        question: "چۆن دەتوانم لە کێشاندا بەشداری بکەم؟",
        answer: "بۆ بەشداریکردن لە کێشاندا، سەرەتا تۆمار بکە، پاشان بلیتەکەت بکڕە و چاوەڕوانی ژمارەی کەمبوونەوە و ڕاگەیاندنی ئەنجامەکان بکە.",
      },
      {
        question: "خەڵاتەکان چۆن دابەش دەکرێن؟",
        answer: "خەڵاتەکان لە سێ ئاستدا دابەش دەکرێن: جەکپۆتی گەورە بۆ براوەی سەرەکی، خەڵاتی گەورە بۆ دواکەوتووەکان، و خەڵاتی بۆنەس بۆ بەشداربووانی بەختەوەر.",
      },
      {
        question: "ئایا کێشانەکان دادپەروەرانەن؟",
        answer: "بەڵێ، هەموو کێشانەکان بە تەکنەلۆژیای بلۆکچەین پشتڕاست دەکرێنەوە کە دادپەروەری تەواو و توانای پشکنین دەسەلمێنێت.",
      },
      {
        question: "چۆن دەتوانم خەڵاتەکەم وەربگرم؟",
        answer: "پاش ڕاگەیاندنی ئەنجامەکان، خەڵاتەکان بە شێوەی ئۆتۆماتیکی لە حسابەکەت دادەنرێن و دەتوانیت دەریانبهێنیت.",
      },
      {
        question: "کەمترین تەمەن بۆ بەشداریکردن چەندە؟",
        answer: "کەمترین تەمەن بۆ بەشداریکردن لە کێشاندا ١٨ ساڵە.",
      },
    ],
  },
  fa: {
    title1: "سوالات ",
    title2: "متداول",
    subtitle: "پاسخ سوالات رایج درباره Lucky10 را در اینجا بیابید",
    items: [
      {
        question: "Lucky10 چیست؟",
        answer: "Lucky10 یک پلتفرم لاتاری آنلاین با الهام از بازی‌های ویدیویی است که تجربه‌ای هیجان‌انگیز، شفاف و منصفانه را برای کاربران فراهم می‌کند.",
      },
      {
        question: "چگونه می‌توانم در قرعه‌کشی شرکت کنم؟",
        answer: "برای شرکت در قرعه‌کشی، ابتدا ثبت‌نام کنید، سپس بلیت خود را خریداری کنید و منتظر شمارش معکوس و اعلام نتایج باشید.",
      },
      {
        question: "جوایز چگونه توزیع می‌شوند؟",
        answer: "جوایز در سه سطح توزیع می‌شوند: جکپات بزرگ برای برنده اصلی، جایزه بزرگ برای نفرات بعدی، و جوایز پاداشی برای شرکت‌کنندگان خوش‌شانس.",
      },
      {
        question: "آیا قرعه‌کشی‌ها منصفانه هستند؟",
        answer: "بله، تمام قرعه‌کشی‌ها با استفاده از فناوری بلاکچین تأیید می‌شوند که تضمین‌کننده عدالت کامل و قابلیت حسابرسی است.",
      },
      {
        question: "چگونه می‌توانم جایزه خود را دریافت کنم؟",
        answer: "پس از اعلام نتایج، جوایز به صورت خودکار به حساب کاربری شما واریز می‌شود و می‌توانید آن را برداشت کنید.",
      },
      {
        question: "حداقل سن برای شرکت در قرعه‌کشی چقدر است؟",
        answer: "حداقل سن برای شرکت در قرعه‌کشی ۱۸ سال تمام است.",
      },
    ],
  },
  ar: {
    title1: "الأسئلة ",
    title2: "الشائعة",
    subtitle: "اعثر على إجابات للأسئلة الشائعة حول Lucky10 هنا",
    items: [
      {
        question: "ما هو Lucky10؟",
        answer: "Lucky10 هي منصة يانصيب عبر الإنترنت مستوحاة من ألعاب الفيديو توفر تجربة مثيرة وشفافة وعادلة للمستخدمين.",
      },
      {
        question: "كيف يمكنني المشاركة في السحب؟",
        answer: "للمشاركة في السحب، قم بالتسجيل أولاً، ثم اشترِ تذكرتك وانتظر العد التنازلي وإعلان النتائج.",
      },
      {
        question: "كيف يتم توزيع الجوائز؟",
        answer: "يتم توزيع الجوائز على ثلاث مستويات: الجائزة الكبرى للفائز الرئيسي، والجائزة الكبيرة للوصفاء، وجوائز إضافية للمشاركين المحظوظين.",
      },
      {
        question: "هل السحوبات عادلة؟",
        answer: "نعم، يتم التحقق من جميع السحوبات باستخدام تقنية البلوكشين التي تضمن العدالة الكاملة وقابلية التدقيق.",
      },
      {
        question: "كيف يمكنني المطالبة بجائزتي؟",
        answer: "بعد إعلان النتائج، يتم إيداع الجوائز تلقائياً في حسابك ويمكنك سحبها.",
      },
      {
        question: "ما هو الحد الأدنى للسن للمشاركة؟",
        answer: "الحد الأدنى للسن للمشاركة في السحب هو 18 عاماً.",
      },
    ],
  },
};

const FAQAccordion = ({ item, isOpen, onClick, isRTL }: { item: FAQItem; isOpen: boolean; onClick: () => void; isRTL: boolean }) => {
  return (
    <div className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm">
      <button
        onClick={onClick}
        className={`w-full px-6 py-5 flex items-center justify-between hover:bg-primary/5 transition-colors ${isRTL ? "text-right" : "text-left"}`}
      >
        {isRTL ? (
          <>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
            <span className="font-heading font-semibold text-foreground text-lg">{item.question}</span>
          </>
        ) : (
          <>
            <span className="font-heading font-semibold text-foreground text-lg">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </>
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <p className={`px-6 pb-5 text-muted-foreground font-body leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language, isRTL, t } = useLanguage();
  const content = faqData[language];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-24">
        {/* Back Button */}
        <div className={`mb-8 ${isRTL ? "text-right" : "text-left"}`}>
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/">
              {isRTL ? (
                <>
                  <span>{t.common.backToHome}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4" />
                  <span>{t.common.backToHome}</span>
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
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">{content.subtitle}</p>
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
};

export default FAQPage;
