"use client";

import Navbar from "@/components/lucky10/Navbar";
import Footer from "@/components/lucky10/Footer";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const TermsOfServicePage = () => {
  const { isRTL, t } = useLanguage();

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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <FileText className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Terms of </span>
            <span className="text-gradient">Service</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg">
            Last updated: 10/01/2026
          </p>
        </div>

        {/* Content */}
        <div className={`max-w-4xl mx-auto space-y-8 ${isRTL ? "text-right" : "text-left"}`}>
          {/* Section 1 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. OVERVIEW</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                LUCKY10 is a decentralized, non-custodial lottery system built on the TON blockchain. These Terms of
                Service ("Terms") govern your access to and use of the LUCKY10 platform, website, and smart contracts
                (collectively, the "Service").
              </p>
              <p>
                By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you must
                not use the Service.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. HOW THE LOTTERY WORKS</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                Each lottery round consists of exactly <strong>10,000 tickets</strong>. The ticket price is fixed per
                round and publicly visible on the platform.
              </p>
              <p>Once all 10,000 tickets are sold:</p>
              <ul className={`list-disc ${isRTL ? "mr-6" : "ml-6"} space-y-2`}>
                <li>The smart contract automatically triggers the draw</li>
                <li>Winners are selected using verifiable on-chain randomness</li>
                <li>Prizes are distributed instantly to winning wallets</li>
              </ul>
              <p>No human intervention is required or possible once a round begins.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. PRIZE DISTRIBUTION</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>The total pool collected from each round is distributed as follows:</p>
              <ul className={`list-disc ${isRTL ? "mr-6" : "ml-6"} space-y-2`}>
                <li>
                  <strong>60% — Grand Jackpot:</strong> Awarded to 1 winner
                </li>
                <li>
                  <strong>30% — Lucky Participants:</strong> Distributed as airdrops among selected participants
                </li>
                <li>
                  <strong>10% — Platform Fee:</strong> Allocated for operational costs and development
                </li>
              </ul>
              <p>All distributions are executed automatically by the smart contract and are publicly verifiable on the blockchain.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. TICKET PURCHASES</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>Users may purchase tickets by:</p>
              <ul className={`list-disc ${isRTL ? "mr-6" : "ml-6"} space-y-2`}>
                <li>Connecting a compatible TON wallet and interacting with the smart contract</li>
                <li>Sending TON directly to the smart contract address with a valid Memo</li>
              </ul>
              <p>
                All ticket purchases are final and non-refundable once confirmed on-chain. Each ticket purchase is recorded
                immutably on the TON blockchain.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. ELIGIBILITY</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>By using the Service, you confirm that:</p>
              <ul className={`list-disc ${isRTL ? "mr-6" : "ml-6"} space-y-2`}>
                <li>You are at least 18 years old or the minimum legal age in your jurisdiction</li>
                <li>Participation in decentralized lotteries is legal in your jurisdiction</li>
                <li>You are solely responsible for compliance with local laws and regulations</li>
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. NON-CUSTODIAL NATURE</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>LUCKY10 is fully non-custodial:</p>
              <ul className={`list-disc ${isRTL ? "mr-6" : "ml-6"} space-y-2`}>
                <li>We never hold, control, or have access to user funds</li>
                <li>All funds are managed exclusively by the smart contract</li>
                <li>We do not store private keys or wallet credentials</li>
              </ul>
              <p>You are solely responsible for the security of your wallet and private keys.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. SMART CONTRACT TRANSPARENCY</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                All lottery logic is executed through publicly deployed and verified smart contracts on the TON blockchain.
                The source code is open for audit and verification by any party.
              </p>
              <p>
                We are not liable for any bugs, vulnerabilities, or exploits in the smart contract code, although every
                effort is made to ensure security and reliability.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. LIMITATION OF LIABILITY</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>To the maximum extent permitted by law:</p>
              <ul className={`list-disc ${isRTL ? "mr-6" : "ml-6"} space-y-2`}>
                <li>The Service is provided "as is" without warranties of any kind</li>
                <li>We are not liable for losses resulting from blockchain network issues, wallet errors, or user mistakes</li>
                <li>We do not guarantee uninterrupted access to the Service</li>
              </ul>
            </div>
          </section>

          {/* Section 9 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. CHANGES TO THESE TERMS</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted on this page with an updated
                revision date. Continued use of the Service after changes constitutes acceptance of the revised Terms.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. CONTACT</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>For questions about these Terms, please contact us via:</p>
              <a
                className="text-primary font-semibold"
                href="https://t.me/lucky10_support"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram Support
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
