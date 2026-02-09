"use client";

import Navbar from "@/components/lucky10/Navbar";
import Footer from "@/components/lucky10/Footer";
import { ArrowLeft, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
  const { isRTL, t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-24">
        {/* Back Button */}
        <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
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
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Privacy </span>
            <span className="text-gradient">Policy</span>
          </h1>
          <p className="text-muted-foreground font-body text-lg">
            Last updated: 10/01/2026
          </p>
        </div>

        {/* Content */}
        <div className={`max-w-4xl mx-auto space-y-8 ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Section 1 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">1. INTRODUCTION</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                This Privacy Policy explains how LUCKY10 ("we", "us", or "our") operates with respect to user privacy when you access and use our decentralized lottery platform built on the TON blockchain (the "Service").
              </p>
              <p>
                The Service is designed to operate in a trustless, non-custodial, and privacy-preserving manner, relying on public and verified smart contracts for all lottery logic and fund handling.
              </p>
              <p>
                By using the Service, you agree to this Privacy Policy in addition to our Terms and Conditions. If you do not agree, you must not use the Service.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">2. INFORMATION WE COLLECT</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>We collect minimal information by design.</p>
              <p>The only information that may be associated with users includes:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li><strong>Wallet Information:</strong> TON blockchain wallet addresses and on-chain transaction data generated through interaction with the smart contract.</li>
              </ul>
              <p>We do not require:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Account creation</li>
                <li>Email registration</li>
                <li>Identity verification (KYC)</li>
                <li>Submission of personal documents</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">3. INFORMATION WE DO NOT COLLECT</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>We explicitly do not collect, store, or process:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Names or identity details</li>
                <li>Email addresses or phone numbers</li>
                <li>IP addresses</li>
                <li>Cookies or tracking identifiers</li>
                <li>Device fingerprints</li>
                <li>Location or geo-tracking data</li>
                <li>Login credentials or user profiles</li>
              </ul>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">4. WALLET CONNECTION & MEMO-BASED DEPOSITS</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>Users may participate in the Service by:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Connecting a compatible TON wallet, or</li>
                <li>Sending funds directly to the smart contract address using a Memo, without connecting a wallet.</li>
              </ul>
              <p>Both interaction methods are:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Fully non-custodial</li>
                <li>Anonymous</li>
                <li>Executed directly on-chain</li>
              </ul>
              <p>We do not control, store, or access user wallets or private keys.</p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">5. HOW WE USE INFORMATION</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>The limited information available to us is used solely to:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Display transaction status and lottery participation data</li>
                <li>Enable interaction with the smart contract</li>
                <li>Ensure correct execution of lottery rounds through on-chain logic</li>
              </ul>
              <p>We do not use data for marketing, profiling, analytics, or advertising purposes.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">6. BLOCKCHAIN TRANSPARENCY</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                All lottery operations, including ticket purchases, fund pooling, winner selection, and payouts, are executed through public and verified smart contracts on the TON blockchain.
              </p>
              <p>Blockchain data is:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Public by nature</li>
                <li>Not created or owned by us</li>
                <li>Independently verifiable through blockchain explorers</li>
              </ul>
            </div>
          </section>

          {/* Section 7 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">7. SERVER & INFRASTRUCTURE</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                The website interface is hosted on a centralized VPS server for availability and performance purposes only.
              </p>
              <p>The server:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>Does not store personal data</li>
                <li>Does not maintain identifiable user logs</li>
                <li>Serves solely as a frontend interface to the blockchain</li>
              </ul>
            </div>
          </section>

          {/* Section 8 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">8. LEGAL BASIS FOR PROCESSING</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>Where applicable, our processing is based on:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li><strong>Contractual necessity:</strong> To provide access to the Service</li>
                <li><strong>Legitimate interests:</strong> To maintain platform integrity and functionality</li>
              </ul>
              <p>No personal data processing requiring user consent is performed.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">9. INTERNATIONAL USE</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                The Service is available globally. Users are responsible for ensuring that participation in decentralized lottery systems is lawful in their jurisdiction.
              </p>
              <p>
                We do not restrict access based on geographic location and do not perform jurisdictional monitoring.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">10. UNDERAGE USE</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                The Service is intended for individuals 18 years of age or older, or the minimum legal age required to participate in lottery or gambling-related activities in their jurisdiction.
              </p>
              <p>By using the Service, you confirm that you meet this requirement.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">11. DATA SECURITY</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>Because we do not collect or store personal information:</p>
              <ul className={`list-disc ${isRTL ? 'mr-6' : 'ml-6'} space-y-2`}>
                <li>There is no centralized user database</li>
                <li>The risk of personal data breaches is minimized by design</li>
              </ul>
              <p>Security is enforced through blockchain immutability and smart contract transparency.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">12. CHANGES TO THIS PRIVACY POLICY</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date. Continued use of the Service constitutes acceptance of the revised policy.
              </p>
            </div>
          </section>

          {/* Section 13 */}
          <section className="border border-border/50 rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">13. CONTACT US</h2>
            <div className="text-muted-foreground font-body leading-relaxed space-y-4">
              <p>
                If you have questions regarding this Privacy Policy, you may contact us via:
              </p>
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
}
