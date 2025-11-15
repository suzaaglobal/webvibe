import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Code,
  Zap,
  Link,
  Globe,
  Wallet,
  Shield,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-suzaa-navy mb-6 leading-tight">
            Payment Infrastructure for Cryptocurrencies
          </h1>
          <p className="text-xl text-suzaa-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            SUZAA provides secure, compliant payment infrastructure trusted by
            leading global businesses. Streamline operations, reduce costs, and
            scale without limits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-suzaa-navy text-white px-8 py-4 rounded font-semibold hover:bg-suzaa-neutral-900 transition-colors flex items-center justify-center gap-2">
              Launch App <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-suzaa-navy text-suzaa-navy px-8 py-4 rounded font-semibold hover:bg-suzaa-navy hover:text-white transition-colors">
              Github
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-t border-b border-suzaa-neutral-200 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center border-r border-suzaa-neutral-200 last:border-r-0">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">10,000+</p>
              <p className="text-suzaa-neutral-600">
                <em>
                  Supported assets across coins, tokens, and chains.
                  Chain-agnostic.
                </em>
              </p>
            </div>
            <div className="text-center border-r border-suzaa-neutral-200 last:border-r-0">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">175+</p>
              <p className="text-suzaa-neutral-600">
                <em>Supported countries</em>
                <br />
                <em>No KYC required to start</em>
              </p>
            </div>
            <div className="text-center border-r border-suzaa-neutral-200 last:border-r-0">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">0%</p>
              <p className="text-suzaa-neutral-600">
                No per-transaction charges.
                <br />
                Fully transparent flat-fee pricing.
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-suzaa-navy mb-2">100%</p>
              <p className="text-suzaa-neutral-600">
                Open source core.
                <br />
                Always free self-hosted
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-suzaa-navy mb-4">
              Seamless. Transparent. Effortless
            </h2>
            <p className="text-lg text-suzaa-neutral-600 max-w-2xl mx-auto">
              Made for day-to-day simplicity, with an intuitive flow anyone can
              use—no crypto expertise required.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="transition-all duration-200 hover:translate-y-[-2px]">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6"
                style={{ backgroundColor: "#eff5ff" }}
              >
                <Code className="w-5 h-5 text-suzaa-blue" strokeWidth={2} />
              </div>
              <h3 className="text-base font-medium text-suzaa-navy mb-3">
                Open-Source Core
              </h3>
              <p className="text-sm text-suzaa-neutral-600 leading-relaxed">
                Non-custodial and fully transparent by design. Your
                infrastructure, your rules.
              </p>
            </div>
            <div className="transition-all duration-200 hover:translate-y-[-2px]">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6"
                style={{ backgroundColor: "#eff5ff" }}
              >
                <Zap className="w-5 h-5 text-suzaa-blue" strokeWidth={2} />
              </div>
              <h3 className="text-base font-medium text-suzaa-navy mb-3">
                Real-Time Settlement
              </h3>
              <p className="text-sm text-suzaa-neutral-600 leading-relaxed">
                Instant confirmation and low-latency processing across any
                chain.
              </p>
            </div>
            <div className="transition-all duration-200 hover:translate-y-[-2px]">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6"
                style={{ backgroundColor: "#eff5ff" }}
              >
                <Link className="w-5 h-5 text-suzaa-blue" strokeWidth={2} />
              </div>
              <h3 className="text-base font-medium text-suzaa-navy mb-3">
                Simple Payment Links
              </h3>
              <p className="text-sm text-suzaa-neutral-600 leading-relaxed">
                Create and share payment links in seconds—no integrations or
                coding required.
              </p>
            </div>
            <div className="transition-all duration-200 hover:translate-y-[-2px]">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6"
                style={{ backgroundColor: "#eff5ff" }}
              >
                <Globe className="w-5 h-5 text-suzaa-blue" strokeWidth={2} />
              </div>
              <h3 className="text-base font-medium text-suzaa-navy mb-3">
                Global Reach
              </h3>
              <p className="text-sm text-suzaa-neutral-600 leading-relaxed">
                Accept payments from 175+ countries with chain-agnostic
                compatibility.
              </p>
            </div>
            <div className="transition-all duration-200 hover:translate-y-[-2px]">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6"
                style={{ backgroundColor: "#eff5ff" }}
              >
                <Wallet className="w-5 h-5 text-suzaa-blue" strokeWidth={2} />
              </div>
              <h3 className="text-base font-medium text-suzaa-navy mb-3">
                Your Wallet, Your Keys
              </h3>
              <p className="text-sm text-suzaa-neutral-600 leading-relaxed">
                Funds always go directly to your wallet. SUZAA never holds or
                accesses your assets.
              </p>
            </div>
            <div className="transition-all duration-200 hover:translate-y-[-2px]">
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-6"
                style={{ backgroundColor: "#eff5ff" }}
              >
                <Shield className="w-5 h-5 text-suzaa-blue" strokeWidth={2} />
              </div>
              <h3 className="text-base font-medium text-suzaa-navy mb-3">
                Privacy First
              </h3>
              <p className="text-sm text-suzaa-neutral-600 leading-relaxed">
                Start instantly with no KYC required. Minimal data, maximum
                control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="bg-suzaa-navy text-white px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How SUZAA Works</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Simple steps. Powerful use cases.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">01</div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <p className="text-white/70">
                Create your account with just an email. Receive your login PIN
                instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">02</div>
              <h3 className="text-lg font-semibold mb-3">Configure</h3>
              <p className="text-white/70">
                Add your own wallet. No custody, no KYC, full control. Your
                wallet, your keys.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-suzaa-blue mb-4">03</div>
              <h3 className="text-lg font-semibold mb-3">Get Paid</h3>
              <p className="text-white/70">
                Generate a payment request and share it. That&apos;s it—get paid
                in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-white px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-suzaa-navy mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-suzaa-neutral-600">
              No hidden fees. Scale as you grow.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Basic Tier */}
            <div className="border border-suzaa-neutral-200 rounded p-12 flex flex-col">
              <h3 className="text-xl font-bold text-suzaa-navy mb-3">Basic</h3>
              <p className="text-sm text-suzaa-neutral-800 mb-6 flex-grow">
                Hosted version with limits. Limited links and wallets. Essential
                dashboard features.
              </p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-suzaa-navy">
                  Free
                  <span className="text-lg text-suzaa-neutral-600">
                    {" "}
                    – Limited
                  </span>
                </p>
              </div>
              <button className="w-full bg-suzaa-blue text-white py-3 rounded font-semibold hover:bg-suzaa-blue/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Business Tier */}
            <div className="border border-suzaa-neutral-200 rounded p-12 flex flex-col">
              <h3 className="text-xl font-bold text-suzaa-navy mb-3">
                Business
              </h3>
              <p className="text-sm text-suzaa-neutral-800 mb-6 flex-grow">
                Advanced hosted features. Higher limits, multiple wallets,
                webhooks, team access, priority support.
              </p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-suzaa-navy">
                  $10
                  <span className="text-lg text-suzaa-neutral-600">/month</span>
                </p>
              </div>
              <button className="w-full bg-suzaa-blue text-white py-3 rounded font-semibold hover:bg-suzaa-blue/90 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Tier */}
            <div className="border border-suzaa-neutral-200 rounded p-12 flex flex-col">
              <h3 className="text-xl font-bold text-suzaa-navy mb-3">
                Enterprise
              </h3>
              <p className="text-sm text-suzaa-neutral-800 mb-6 flex-grow">
                Unlimited scale. Dedicated support, SLAs, custom integrations,
                compliance options.
              </p>
              <div className="mb-8">
                <p className="text-4xl font-bold text-suzaa-navy">Custom</p>
                <p className="text-sm text-suzaa-neutral-600">
                  Contact for pricing
                </p>
              </div>
              <button className="w-full bg-suzaa-blue text-white py-3 rounded font-semibold hover:bg-suzaa-blue/90 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="px-4 sm:px-6 lg:px-8 py-24 bg-gradient-to-r from-suzaa-blue to-suzaa-teal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for a seamless crypto experience?
          </h2>
          <p className="text-lg text-white/90 mb-10">
            Join countless that trust SUZAA for their payment infrastructure.
          </p>
          <button className="bg-white text-suzaa-blue px-8 py-4 rounded font-semibold hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mx-auto">
            Launch App <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
