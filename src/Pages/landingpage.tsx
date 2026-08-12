import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BarChart3, Building2, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Gift, Handshake, Headphones, Layers, LineChart, Link2, MessageCircle, Monitor, PiggyBank, Play, PlayCircle, Repeat, ShieldCheck, Smartphone, Target, TrendingUp, Users2, X } from "lucide-react";
import Image from "../assets/fx2.webp";
import Image1 from "../assets/fx5.webp";
import Image2 from "../assets/fx3.webp";
import Image3 from "../assets/fx4.webp";
import briefcaseImg from "../assets/c.png";
import dashboardImg from "../assets/Elite1.png";
import faqImg from "../img/Faq.png";
import img1 from "../assets/fx7.webp";
import img2 from "../assets/fx8.webp";
import img3 from "../assets/fx9.webp";
import img4 from "../assets/fx19.webp";
import marketsImg from "../assets/trade.png";
import payoutImg from "../assets/fx12.webp";
import teamImg from "../assets/Elite2.png";
import worldImg from "../img/why.png";

// --- Combined Components ---

/* ==================== HeroSection ==================== */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start overflow-hidden bg-[#050617] pt-10 md:pt-14 pb-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={dashboardImg}
          alt="FXCELITE global trading dashboard"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050617] via-[#050617]/90 to-[#050617]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050617] via-[#050617]/10 to-[#050617]/60" />
      </div>

      {/* Ambient glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: COPY */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 bg-emerald-500/10 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
                Trusted Since 2021 &middot; 220K+ Traders
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white leading-[1.05] mb-6">
              Trade Global Markets
              <br />
              with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400">
                Absolute Confidence
              </span>
            </h1>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-8">
              FXCELITE gives you lightning-fast execution, tight spreads and
              full access to Forex, Indices, Crypto and Commodities &mdash; all
              on a secure, regulated platform built for serious traders.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="https://trade.FXCELITE.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-[#050617] font-bold py-3 px-6 rounded-xl text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                Open Live Account
                <ArrowRight size={16} />
              </a>
              <a
                href="/accounts/demo"
                className="inline-flex items-center justify-center gap-2 border border-white/15 hover:bg-white/5 text-white font-semibold py-3 px-6 rounded-xl text-sm transition-all"
              >
                <PlayCircle size={16} />
                Try Free Demo
              </a>
            </div>


          </motion.div>

          {/* RIGHT: floating cards over background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative hidden lg:block h-[420px]"
          >
            {/* Floating card: live price */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute top-4 left-0 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 rounded-2xl px-5 py-4 shadow-xl w-48"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-slate-400 text-[10px] font-medium">EUR/USD</span>
                <span className="flex items-center gap-1 text-emerald-400 text-[10px] font-semibold">
                  <TrendingUp size={12} /> +0.42%
                </span>
              </div>
              <p className="text-white font-bold text-base">1.0842</p>
            </motion.div>

            {/* Floating card: markets grid */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="absolute bottom-4 right-0 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 rounded-2xl p-3 shadow-xl w-40"
            >
              <img
                src={marketsImg}
                alt="100+ tradable instruments"
                className="w-full h-24 object-cover rounded-xl mb-2"
              />
              <p className="text-white text-[10px] font-semibold text-center">
                100+ Instruments
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}

/* ==================== AboutIntro ==================== */
const avatars_AboutIntro = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/81.jpg",
];

function AboutIntro() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: image */}
          <div className="relative order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={worldImg}
                alt="FXCELITE global trading network"
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
              About FXCELITE
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
              Your Partner as a{" "}
              <span className="text-emerald-400">Trusted Global Trading Platform</span>
            </h2>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-3">
                {avatars_AboutIntro.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="FXCELITE trader"
                    className="w-10 h-10 rounded-full border-2 border-[#070A23] object-cover"
                  />
                ))}
              </div>
              <p className="text-slate-300 text-sm">
                Join 220K+ traders already trading with us.
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed mb-8">
              FXCELITE was built for traders who expect more &mdash; deep liquidity,
              transparent pricing and a platform that never gets in the way of a
              good trade. From your first demo trade to running a multi-account
              portfolio, our team combines market expertise with modern technology
              to keep you focused on strategy, not friction. We hold ourselves to
              the same standard every serious trader holds a broker to: fast
              execution, fair conditions and support that actually helps.
            </p>

            <a
              href="/about"
              className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:gap-3 transition-all"
            >
              Learn More About Us
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== WhyChooseHome ==================== */
const cards = [
  {
    icon: <Target size={20} />,
    title: "Trader-Centric Accounts",
    desc: "Account types built around how you actually trade, from first-time demo users to high-volume professionals.",
  },
  {
    icon: <LineChart size={20} />,
    title: "Transparent Trading Conditions",
    desc: "No hidden markups on spreads, no surprise fees on withdrawals &mdash; every cost is disclosed before you trade.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Proven Execution Expertise",
    desc: "Deep liquidity connections and low-latency routing keep your orders filling at the price you expect.",
  },
  {
    icon: <Headphones size={20} />,
    title: "Reliable 24/5 Support",
    desc: "A dedicated desk that's online through every trading session, so a stuck withdrawal or a platform query never waits a day.",
  },
];

function WhyChooseHome() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* LEFT: content */}
          <div>
            <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
              Trading Conditions Built to{" "}
              <span className="text-emerald-400">Deliver Results</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              FXCELITE exists for traders who want to grow their capital without
              fighting their broker to do it. We focus on execution quality,
              account flexibility, secure fund handling and round-the-clock
              support &mdash; the fundamentals that let a good strategy actually
              perform in live markets.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-[#050617] font-bold py-3.5 px-7 rounded-xl transition-all"
            >
              Get in Touch
              <ArrowRight size={18} />
            </a>
          </div>

          {/* RIGHT: image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={teamImg}
                alt="FXCELITE trading platform interface"
                className="w-full h-[340px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                {c.icon}
              </div>
              <h3 className="text-white font-bold text-base mb-2">{c.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== MarketsSection ==================== */
function MarketsSection() {
  const markets = [
    { title: "Forex", image: Image, accent: "from-cyan-400 to-blue-600" },
    { title: "Commodities", image: Image1, accent: "from-amber-400 to-orange-600" },
    { title: "Indices", image: Image2, accent: "from-violet-400 to-purple-600" },
    { title: "Crypto", image: Image3, accent: "from-emerald-400 to-teal-600" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-indigo-600/20 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Access the World’s Leading Markets
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Trade forex, commodities, indices, and crypto — the world’s most
            liquid assets, all from one powerful platform.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((market, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 text-center
                         transition-all duration-500 hover:-translate-y-2 hover:border-white/20
                         hover:shadow-[0_20px_60px_-20px_rgba(99,102,241,0.6)]"
            >
              {/* ACCENT RING */}
              <div
                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 
                            bg-gradient-to-br ${market.accent} blur-xl`}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* IMAGE */}
                <div className="mb-8 h-40 rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <img
                    src={market.image}
                    alt={`${market.title} market`}
                    className="w-full h-full object-cover opacity-60 
                               transition duration-500 group-hover:opacity-100 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {market.title}
                </h3>

                {/* SUBTEXT */}
                <p className="text-sm text-slate-400">
                  Trade top global {market.title.toLowerCase()} instruments
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==================== ApproachSteps ==================== */
const steps_ApproachSteps = [
  {
    num: "01",
    title: "Account Setup & Goals",
    desc: "Open your account and tell us how you trade &mdash; scalping, swing, or algorithmic &mdash; so your setup matches your strategy from day one.",
  },
  {
    num: "02",
    title: "Market Research & Analysis",
    desc: "Access live pricing, economic calendars and analytical tools across Forex, Indices, Crypto and Commodities before you place a single trade.",
  },
  {
    num: "03",
    title: "Data-Driven Execution",
    desc: "Every order routes through low-latency infrastructure, so the price you click is the price you get, even in fast-moving markets.",
  },
  {
    num: "04",
    title: "Continuous Strategy Optimization",
    desc: "Track your performance through your dashboard and adjust position sizing, risk and instruments as your account grows.",
  },
  {
    num: "05",
    title: "Transparent Reporting",
    desc: "Full deposit, withdrawal and trade history sit in your portal at all times &mdash; nothing about your account is ever a black box.",
  },
];

function ApproachSteps() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-indigo-400 text-xs font-semibold tracking-widest uppercase mb-4">
            The FXCELITE Approach
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
            From Sign-Up to{" "}
            <span className="text-emerald-400">Consistent Execution</span>
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Getting started with FXCELITE is a straightforward, five-step path
            &mdash; each step designed to remove friction so you can spend more
            time trading and less time managing your broker.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
          {/* LEFT: image */}
          <div className="relative order-2 lg:order-1 hidden lg:block">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
              <img
                src={briefcaseImg}
                alt="Trading strategy planning"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </div>

          {/* RIGHT: steps */}
          <div className="order-1 lg:order-2 space-y-8">
            {steps_ApproachSteps.map((s, i) => (
              <div key={i} className="flex gap-6">
                <span className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-sm">
                  {s.num}
                </span>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== ServicesGrid ==================== */
const services = [
  {
    icon: <LineChart size={24} />,
    title: "Forex Trading",
    desc: "Trade major, minor and exotic currency pairs with tight, transparent spreads.",
    bullets: ["Deep liquidity", "Low-latency fills", "Major & exotic pairs", "Real-time pricing"],
    href: "/markets/forex",
    colorTheme: "from-blue-500 to-cyan-400",
    shadowTheme: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: <Repeat size={24} />,
    title: "Copy Trading",
    desc: "Mirror the trades of experienced strategy providers automatically.",
    bullets: ["One-click copying", "Risk controls", "Performance stats", "Multiple strategies"],
    href: "/tools/copy-trading",
    colorTheme: "from-purple-500 to-pink-500",
    shadowTheme: "group-hover:shadow-pink-500/20",
  },
  {
    icon: <Layers size={24} />,
    title: "MAM Accounts",
    desc: "Multi-account manager tools for money managers running client capital.",
    bullets: ["Proportional allocation", "Multi-client control", "Consolidated reporting", "Flexible fee models"],
    href: "/tools/mam",
    colorTheme: "from-amber-400 to-orange-500",
    shadowTheme: "group-hover:shadow-orange-500/20",
  },
  {
    icon: <Users2 size={24} />,
    title: "PAMM Accounts",
    desc: "Pooled account management for investors backing a professional trader.",
    bullets: ["Pooled investment", "Transparent performance", "Automated profit split", "Investor dashboard"],
    href: "/tools/pamm",
    colorTheme: "from-emerald-400 to-teal-500",
    shadowTheme: "group-hover:shadow-emerald-500/20",
  },
  {
    icon: <Monitor size={24} />,
    title: "Web Trading",
    desc: "A full-featured trading terminal that runs directly in your browser.",
    bullets: ["No installation", "Cross-platform", "Live charting", "Instant order entry"],
    href: "/tools/web-trading",
    colorTheme: "from-indigo-400 to-violet-500",
    shadowTheme: "group-hover:shadow-indigo-500/20",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Mobile Trading",
    desc: "Manage positions, deposits and charts from anywhere on iOS and Android.",
    bullets: ["On-the-go execution", "Push price alerts", "Biometric login", "Full account control"],
    href: "/platforms/mobile",
    colorTheme: "from-rose-400 to-red-500",
    shadowTheme: "group-hover:shadow-rose-500/20",
  },
  {
    icon: <BarChart3 size={24} />,
    title: "MetaTrader 5",
    desc: "Trade on the industry-standard MT5 platform with full EA support.",
    bullets: ["Expert Advisors", "Advanced order types", "Multi-asset trading", "Depth of market"],
    href: "/platforms/mt5",
    colorTheme: "from-fuchsia-400 to-purple-600",
    shadowTheme: "group-hover:shadow-fuchsia-500/20",
  },
  {
    icon: <Link2 size={24} />,
    title: "TradingView",
    desc: "Execute trades directly from TradingView's advanced charting suite.",
    bullets: ["Pro-grade charting", "Direct order routing", "Custom indicators", "Synced watchlists"],
    href: "/tools/trading-view-integration",
    colorTheme: "from-cyan-400 to-blue-500",
    shadowTheme: "group-hover:shadow-cyan-500/20",
  },
  {
    icon: <PiggyBank size={24} />,
    title: "Deposits & Withdrawals",
    desc: "Fund and withdraw through multiple fast, secure payment channels.",
    bullets: ["Multiple payment options", "Fast processing", "Full transaction history", "Secure transfers"],
    href: "/funds/deposit",
    colorTheme: "from-yellow-400 to-amber-500",
    shadowTheme: "group-hover:shadow-yellow-500/20",
  },
  {
    icon: <Gift size={24} />,
    title: "Savings & Bonuses",
    desc: "Earn extra value on your balance through savings and bonus programs.",
    bullets: ["Tiered savings", "Deposit bonuses", "No hidden conditions", "Auto-crediting"],
    href: "/benefits/savings",
    colorTheme: "from-lime-400 to-green-500",
    shadowTheme: "group-hover:shadow-lime-500/20",
  },
  {
    icon: <Handshake size={24} />,
    title: "Partner Program",
    desc: "Earn recurring commissions by referring traders to FXCELITE.",
    bullets: ["Multi-level payouts", "Referral dashboard", "Marketing resources", "Timely payouts"],
    href: "/join-partner",
    colorTheme: "from-sky-400 to-indigo-500",
    shadowTheme: "group-hover:shadow-sky-500/20",
  },
  {
    icon: <Building2 size={24} />,
    title: "White Label Solutions",
    desc: "Launch your own branded brokerage on FXCELITE's infrastructure.",
    bullets: ["Full branding control", "Turnkey setup", "Liquidity access", "Ongoing tech support"],
    href: "/white-label-solutions",
    colorTheme: "from-gray-300 to-slate-400",
    shadowTheme: "group-hover:shadow-slate-500/20",
  },
];

function ServicesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth > 1024 ? 400 : 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative bg-[#050617] py-24 md:py-32 overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Trade the Markets</span>
          </h2>
        </div>

        <div className="relative group/carousel">
          <button 
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-emerald-500 transition-all shadow-xl shadow-indigo-500/20"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-emerald-500 transition-all shadow-xl shadow-indigo-500/20"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollRef}
            className="flex flex-nowrap overflow-x-auto gap-6 snap-x snap-mandatory pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-2"
          >
            {services.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className={`group relative shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] snap-center rounded-3xl p-6 bg-[#0B1028]/80 backdrop-blur-xl border border-white/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden ${s.shadowTheme} hover:shadow-2xl`}
              >
                {/* Top border gradient on hover */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${s.colorTheme} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.colorTheme} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                  <span className="text-white relative z-10 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </span>
                </div>
                
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all">
                  {s.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                  {s.desc}
                </p>
                
                <ul className="space-y-3">
                  {s.bullets.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 text-sm group-hover:text-slate-300 transition-colors">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.colorTheme} shrink-0`} />
                      {b}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== PricingTable ==================== */
/* =========================
   ICONS
========================= */
const ICONS = {
  Check: () => (
    <svg 
      className="w-4 h-4 text-emerald-400 shrink-0" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
    </svg>
  )
};

/* =========================
   PRICING DATA
========================= */
const PRICING_PLANS = [
  { 
    id: "2.5k", 
    name: "2.5K Instant", 
    startingBalance: "$2,500", 
    profitSharing: "95%", 
    timeLimit: "∞", 
    minTradingDays: "5", 
    target: "8%", 
    maxDrawdown: "5%", 
    leverage: "1:100", 
    price: "$67" 
  },
  { 
    id: "5k", 
    name: "5K Instant", 
    startingBalance: "$5,000", 
    profitSharing: "95%", 
    timeLimit: "∞", 
    minTradingDays: "5", 
    target: "8%", 
    maxDrawdown: "5%", 
    leverage: "1:100", 
    price: "$199", 
    isPopular: true 
  },
  { 
    id: "custom", 
    name: "Custom Plan", 
    startingBalance: "Flexible", 
    profitSharing: "Up to 95%", 
    timeLimit: "Custom", 
    minTradingDays: "Flexible", 
    target: "Flexible", 
    maxDrawdown: "Custom", 
    leverage: "1:100", 
    price: "Let's Talk" 
  },
];

/* =========================
   MAIN COMPONENT
========================= */
function PricingTable() {
  const tableRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-[#050617] via-[#070A23] to-[#050617] text-white px-6 py-24 md:py-32 overflow-hidden">
      {/* HERO */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">The Best Plan</span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl">
          Select the program that fits your trading goals. Hover over any plan to see all features.
        </p>
      </section>

      {/* CARDS GRID */}
      <div ref={tableRef} className="max-w-7xl mx-auto flex flex-nowrap overflow-x-auto gap-6 md:gap-8 items-start pb-10 pt-6 px-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden justify-start md:justify-center">
        {PRICING_PLANS.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

/* =========================
   CARD COMPONENT
========================= */
function PricingCard({ plan }: { plan: any }) {
  const isCustom = plan.id === "custom";

  return (
    <div className={`group relative shrink-0 w-[85vw] sm:w-[320px] lg:w-[340px] snap-center bg-gradient-to-b from-[#0B1028] to-[#070A23] border ${plan.isPopular ? 'border-emerald-500/50' : 'border-white/10'} rounded-3xl p-7 hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500`}>
      
      {plan.isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-emerald-500/30">
          MOST POPULAR
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-8 mt-2">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-slate-400 text-sm mb-6">Starting Balance: <span className="text-white font-semibold">{plan.startingBalance}</span></p>
        
        <div className="flex items-center justify-center gap-1 mb-2">
          <span className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 ${isCustom ? 'text-3xl' : ''}`}>
            {plan.price}
          </span>
        </div>
        {!isCustom && (
           <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">One-time fee</p>
        )}
      </div>

      <button className={`w-full py-3.5 mb-6 rounded-xl font-bold transition-all duration-300 ${plan.isPopular ? 'bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 hover:shadow-lg hover:shadow-emerald-500/30 hover:scale-[1.02]' : 'bg-white/10 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.02]'}`}>
        {isCustom ? "Contact Us" : "Get Started"}
      </button>

      {/* Hover Reveal Trigger Hint */}
      <div className="flex flex-col items-center justify-center gap-2 group-hover:opacity-0 transition-opacity duration-300 absolute bottom-6 left-0 right-0">
         <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Hover for features</span>
         <svg className="w-4 h-4 text-slate-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
         </svg>
      </div>

      {/* Expanding Features List */}
      <div className="max-h-[0px] opacity-0 overflow-hidden group-hover:max-h-[500px] group-hover:opacity-100 group-hover:pb-4 transition-all duration-500 ease-in-out">
        <div className="pt-4 border-t border-white/10 space-y-4">
          <FeatureRow label="Profit Sharing" value={plan.profitSharing} />
          <FeatureRow label="Time Limit" value={plan.timeLimit} />
          <FeatureRow label="Min Trading Days" value={plan.minTradingDays} />
          <FeatureRow label="Target" value={plan.target} />
          <FeatureRow label="Max Drawdown" value={plan.maxDrawdown} />
          <FeatureRow label="Leverage" value={plan.leverage} />
        </div>
      </div>
      
      {/* Spacer to push height equivalent to the hover hint when not hovered */}
      <div className="h-10 group-hover:hidden" />
    </div>
  );
}

function FeatureRow({ label, value }: { label: string, value: string | undefined }) {
  if (!value) return null;
  return (
    <div className="flex justify-between items-center text-sm">
      <div className="flex items-center gap-2">
        <ICONS.Check />
        <span className="text-slate-400">{label}</span>
      </div>
      <span className="text-white font-semibold">{value}</span>
    </div>
  );
}

/* ==================== ComparisonTable ==================== */
function ComparisonTable() {
  const rows = [
    {
      feature: "Max Account Size",
      fundyourfx: "Up to $3 Million",
      ftmo: "Up to $400,000",
      fundingpips: "Up to $2 Million",
      fundednext: "Up to $4 Million",
    },
    {
      feature: "Minimum Days Requirement",
      fundyourfx: "No minimum days required",
      ftmo: "10 minimum days",
      fundingpips: "3 trading days in evaluation",
      fundednext: "5 trading days in evaluation",
    },
    {
      feature: "Time Limit",
      fundyourfx: "No time limit",
      ftmo: "30 Days",
      fundingpips: "30 Days",
      fundednext: "30 Days",
    },
    {
      feature: "Daily Drawdown Rule",
      fundyourfx: "No daily drawdown rule",
      ftmo: "Yes, 5% daily drawdown",
      fundingpips: "Maximum daily loss limit of 5%",
      fundednext: "5% daily loss limit",
    },
    {
      feature: "Payout Policy",
      fundyourfx: "Payout after 14 days, $150 min",
      ftmo: "Payouts processed monthly",
      fundingpips: "1% min withdrawal, 60%–100% profit split",
      fundednext: "95% profit split, 1st payout in 5 days",
    },
    {
      feature: "Platforms Offered",
      fundyourfx: "Match-Trader with MT5 Copier available",
      ftmo: "MT4, MT5, cTrader",
      fundingpips: "MT5 in partnership with BlackBull Markets",
      fundednext: "MT4, MT5, cTrader",
    },
    {
      feature: "Type of Plans",
      fundyourfx: "Evaluation based and Instant Funding plans",
      ftmo: "Evaluation based",
      fundingpips: "Evaluation based and Instant Funding plans",
      fundednext: "Evaluation based",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-4">
            How We <span className="text-emerald-400">Stand Out</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Overview comparison with our competitors
          </p>
        </div>

        {/* TABLE */}
        <div className="relative overflow-x-auto rounded-3xl border border-white/10 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028]">

          <table className="min-w-full text-left text-sm text-white">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 font-semibold">Feature</th>
                <th className="px-6 py-5 font-semibold bg-indigo-600/90">
                 FXCELITE
                </th>
                <th className="px-6 py-5 font-semibold">FTMO</th>
                <th className="px-6 py-5 font-semibold">Fundingpips</th>
                <th className="px-6 py-5 font-semibold">FundedNext</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/10 last:border-none"
                >
                  <td className="px-6 py-5 font-medium text-slate-200">
                    {row.feature}
                  </td>

                  <td className="px-6 py-5 bg-indigo-600/80 font-semibold">
                    {row.fundyourfx}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.ftmo}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.fundingpips}
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {row.fundednext}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </section>
  );
}

/* ==================== TechShowcase ==================== */
const avatars_TechShowcase = [
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/23.jpg",
  "https://randomuser.me/api/portraits/women/56.jpg",
  "https://randomuser.me/api/portraits/men/67.jpg",
];

const problems = [
  "Slow, requoted order execution",
  "Wide, unpredictable spreads",
  "Platform downtime during volatility",
  "Limited access to global markets",
];

const solutions = [
  "Sub-second execution speeds",
  "Tight, transparent spreads",
  "99.9% platform uptime",
  "Forex, Indices, Crypto & Commodities",
];

function useCountUp(end: number, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const step = (t: number) => {
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration]);
  return count;
}

function TechShowcase() {
  const count = useCountUp(220);

  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img
          src="/P1.png"
          alt="Global trading technology network"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050617] via-[#050617]/80 to-[#070A23]" />

      <div className="relative max-w-7xl mx-auto px-6">


        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight">
            Smart Trading Technology That{" "}
            <span className="text-emerald-400">Drives Growth</span>
          </h2>
          <p className="text-slate-400 leading-relaxed mt-6">
            Our infrastructure is built on low-latency routing, deep liquidity
            partnerships and secure cloud systems, engineered to meet your
            trading needs at every account size.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-red-500/15">
            <h3 className="text-red-400 font-bold text-sm uppercase tracking-widest mb-6">
              What Costs You Money Elsewhere
            </h3>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl p-8 bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-emerald-500/20">
            <h3 className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-6">
              What You Get With FXCELITE
            </h3>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ==================== TradeCopierSection ==================== */
function TradeCopierSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#050617] to-[#070A23] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* =========================
              LEFT CONTENT
          ========================= */}
          <div>
            <p className="text-indigo-400 font-semibold tracking-widest mb-4">
              TRADE COPIER
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6">
              Trade with MT5,<br />
              Execute with Match-Trader
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-xl">
              Easily copy your trades from MT5, the industry's most popular
              platform, to Match-Trader. Instant, accurate, and reliable—built
              for traders who demand the best.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-6">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold hover:opacity-90 transition shadow-lg shadow-emerald-500/30">
                Download File
              </button>

              <a
                href="#"
                className="text-emerald-400 font-semibold underline-offset-4 hover:underline transition"
              >
                Check Full Guide
              </a>
            </div>
          </div>

          {/* =========================
              RIGHT MEDIA CARD
          ========================= */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-700 to-indigo-900 border border-white/10">

              {/* Background image */}
              <img
                src="https://images.unsplash.com/photo-1642790106117-e829e14a795f"
                alt="MetaTrader 5"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
              />

              {/* Overlay */}
              <div className="relative z-10 p-10 flex flex-col items-center justify-center text-center min-h-[320px]">
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                  MetaTrader 5
                </h3>

                <div className="flex items-center gap-3 text-white/80 mb-6">
                  <span className="text-xl font-semibold">×</span>
                  <span className="text-xl font-semibold">Match-Trader</span>
                </div>

                {/* Play Button */}
                <button className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:scale-105 transition">
                  <Play className="text-white ml-1" size={26} />
                </button>

                <p className="text-sm text-white/70 mt-6">
                  Powered by <span className="font-semibold">Match-Trade Technologies</span>
                </p>
              </div>

              {/* Glow */}
              <div className="absolute -inset-10 bg-indigo-600/30 blur-3xl -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ==================== FridayPayouts ==================== */
// replace with your image

function FridayPayouts() {
  return (
    <section className="bg-gradient-to-b from-[#050617] to-[#070A23] py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CONTAINER */}
        <div className="rounded-3xl bg-gradient-to-br from-[#0B1028] via-[#0E1433] to-[#0B1028] border border-white/10 p-12 md:p-16 flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT CONTENT */}
          <div className="flex-1">
            <p className="text-indigo-400 font-semibold tracking-widest mb-4">
              BENEFITS
            </p>

            <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-white mb-6">
              Seamless Transactions, Happy Traders
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl">
              Partnering with profitable traders daily allows us to understand
              what brings them joy. Enjoy seamless and reliable transactions to manage
              your trading capital! You can easily access your funds through a variety 
              of secure options, including crypto and bank transfers.
            </p>
          </div>

          {/* RIGHT ILLUSTRATION */}
          <div className="flex-1">
             <img src={payoutImg} alt="Payouts" className="w-full rounded-2xl" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#050617] min-h-screen text-white">
      <HeroSection />
      <AboutIntro />
      <WhyChooseHome />
      <MarketsSection />
      <ApproachSteps />
      <ServicesGrid />
      <PricingTable />
      <ComparisonTable />
      <TechShowcase />
      <TradeCopierSection />
      <FridayPayouts />
    </div>
  );
}
